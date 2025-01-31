import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { axiosClient } from "../services/axios-client";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { FormatError, formatResponse } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";

function useFetch(errorType: string) {
  const [data, setData] = useState([]);
  const [datum, setDatum] = useState();

  const { authDetails } = useContext(AuthenticationContext);
  const client = axiosClient(authDetails.token);

  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [loading, setIsLoading] = useState(false);

  const getData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await client.get("/course/getAllCourses");
      setData(response?.data?.allCourses);
      setIsLoading(false);
    } catch (error) {
      FormatError(error, setError, "Course Error");
    }
  }, []);

  const getDatum = useCallback(async (url:string, id:any, responseType: string) => {
    setIsLoading(true);
    try {
    if(!id){
        throw new Error("Cannot retrive faculty");
        
    }
      const response = await client.get(url);
      //   setData(response?.data?.allCourses);
      console.log(response);
      formatResponse(response,setDatum, responseType)
      setIsLoading(false);
    } catch (error) {
      FormatError(error, setError, errorType);
    }
  }, []);

  useEffect(() => {
    if (error.message && error.error) {
      onFailure(error);
      setError({
        message: "",
        error: "",
      });
      setIsLoading(false);
    }
  }, [error.message, error.error]);

  return { data, datum, loading, getData, getDatum };
}

export default useFetch;
