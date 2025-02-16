import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { axiosClient } from "../services/axios-client";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { FormatError } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";
import { onSuccess } from "../utils/notifications/OnSuccess";

function useAttendance() {
    const [scanStatus, setScanStatus] = useState('');
    const [fingerprintData, setFingerprintData] = useState(null);

    const { authDetails } = useContext(AuthenticationContext);

    const client = axiosClient(authDetails.token);
    const [error, setError] = useState({
        message: "",
        error: "",
    });
    const [loading, setIsLoading] = useState(false);


    const resetAttendance= ()=>{
        setIsLoading(false);
        setError("");
        setScanStatus("");
    }

    const FingerprintScan = async () => {
        setError({
            message: "",
            error: "",
        });
        setScanStatus('Configuring scanner...');
        setIsLoading(true)
        try {
            setScanStatus('Scanning fingerprint...');
            const data = await navigator.credentials.get({
                publicKey: { challenge: new Uint8Array(32), timeout: 60000, userVerification: "required" }
            });
            setFingerprintData(data)
            setScanStatus('Uploading fingerprint data...');
            await client.post('/api/attendance', { data });
            onSuccess({ message: "Attendance Status", success: "Attendance marked successfully!" })
            setScanStatus('Attendance marked successfully!');
            alert('Attendance marked successfully!');
        } catch (error) {
            setScanStatus('Failed to scan fingerprint.');
            FormatError(error, setError, "Attendance Error");
        } finally {
            setIsLoading(false);
        }
    };


    useEffect(() => {
        if (error.message && error.error) {
            onFailure(error);
            setIsLoading(false);
        }
    }, [error.message, error.error]);


    return {
        setScanStatus,
        scanStatus,
        FingerprintScan,
        loading,
        error,
        resetAttendance
    };

}
export default useAttendance;