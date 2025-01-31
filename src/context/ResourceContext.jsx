import { createContext, useContext, useEffect, useState } from "react";
// import { getItemByPost, getItemFunc, getTimeTable } from "../components/utils/getApi";
import { AuthenticationContext } from "./AuthenticationContext";
import { getItemFunc, getUpdatedUser, getDetailFunc } from "../utils/getApi";

export const ResourceContext = createContext();

export function ResourceContextProvider({ children }) {

    const { authDetails } = useContext(AuthenticationContext);
    const token = authDetails?.token ? authDetails.token : null;
    const [checker, setChecker] = useState(false);
    const [errorMesage, setErrorMessage] = useState('');
    const [cartItems, setCartItems] = useState([]);

    const [getInstructors, setGetInstructors] = useState({
        data: null,
        isDataNeeded: false,
    });
    const [getAllUsers, setGetAllUsers] = useState({
        data: null,
        isDataNeeded: false,
    });
    const [getAllCourses, setGetAllCourses] = useState({
        data: null,
        isDataNeeded: false,
    });
    const [getAllSchedule, setGetAllSchedule] = useState({
        data: null,
        isDataNeeded: false,
    });

     //Users Resource useEffect
     useEffect(() => {
        setErrorMessage('');
        if (getAllUsers.isDataNeeded) {
            const endPoint = `/user/getUsers`
            const dataArray = "allUsers"
            getItemFunc(token, setGetAllUsers, setErrorMessage, endPoint, dataArray, setChecker)
        }
    }, [getAllUsers.isDataNeeded]);
    //Users Resource useEffect
    useEffect(() => {
        setErrorMessage('');
        if (getAllCourses.isDataNeeded) {
            const endPoint = `/course/getAllCourses`
            const dataArray = "allCourses"
            getItemFunc(token, setGetAllCourses, setErrorMessage, endPoint, dataArray, setChecker)
        }
    }, [getAllCourses.isDataNeeded]);

    //Users Resource useEffect
    useEffect(() => {
        setErrorMessage('');
        if (getAllSchedule.isDataNeeded) {
            const endPoint = `/schedule/allSchedule`
            const dataArray = "schedule"
            getItemFunc(token, setGetAllSchedule, setErrorMessage, endPoint, dataArray, setChecker)
        }
    }, [getAllSchedule.isDataNeeded]);

    useEffect(() => {
        setErrorMessage('');
        if (getInstructors.isDataNeeded) {
            const endPoint = `/instructor/get`
            const dataArray = "instructors"
            getItemFunc(token, setGetInstructors, setErrorMessage, endPoint, dataArray, setChecker)
        }
    }, [getInstructors.isDataNeeded]);

    return (
        <ResourceContext.Provider
            value={{
                checker,
                setChecker,
                errorMesage,
                setGetInstructors,
                getInstructors,
                setGetAllCourses,
                getAllCourses,
                setGetAllSchedule,
                getAllSchedule,
                setGetAllUsers,
                getAllUsers,
                cartItems,
                setCartItems
            }}
        >
            {children}
        </ResourceContext.Provider>
    )
}

export default ResourceContextProvider
