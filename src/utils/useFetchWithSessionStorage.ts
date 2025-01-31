// import { stringify } from "nodemon/lib/utils";
// import { useState, useEffect } from "react";
// import axios from "axios";

// type RequestProp = "get" | "post" | "update" | "delete";

// type HookProps = {
//   url?: string;
//   data?: any;
//   id?: any;
//   sessionId?: string | null;
// };

// type SessionProps = {
//   currentData: any;
//   retrieve: boolean;
// };

// function useFetchWithSessionStorage({
//   url = "x",
//   data = null,
//   sessionId = null,
// }: HookProps) {
//   const [currentData, setCurrentData] = useState<any>(null);
//   const [retrieve, setRetrieve] = useState<boolean | null>(null);
//   const [error, setError] = useState<string>();

//   //Validate Props

//   //url validation
//   if (url === "x") {
//     throw new Error("Url Cannot be null");
//   }

//   //validate seesionId
//   if (!sessionId) {
//     throw new Error("Session Id cannot be null");
//   }

//   //get values from session
//   const getValuesFromSession = () => {
//     const storedItem = sessionStorage.getItem(sessionId);
//     if (storedItem) {
//       const storedValue: SessionProps = JSON.parse(storedItem) as SessionProps;
//       console.log("from get:", storedValue);
//       return storedValue;
//     }
//     return null;
//   };

//   //store values in session and store in state variable
//   const storeValuesInSession = (data: any, retrieve: boolean) => {
//     sessionStorage.setItem(
//       sessionId,
//       JSON.stringify({ currentData: data, retrieve })
//     );
//     const storedValue = getValuesFromSession();
//     if (storedValue) {
//       setCurrentData(storedValue.currentData);
//       console.log("Should run second");
//       setRetrieve(storedValue.retrieve);
//     }
//   };

//   //get recent data from database
//   const collectDataFromDatabase = async () => {
//     if (retrieve) {
//       try {
//         //collect from database, store in session storage and update state variles of currentData and retrieve
//         const response = await axios.get(url);
//         const data = response.data;
//         storeValuesInSession(data, false);
//       } catch (error) {
//         setError(error.message);
//       }
//     }
//   };

//   //Initialise retrive and currentData as stored values
//   const initialiseStoredValues = () => {
//     const storedData = getValuesFromSession();

//     //on init retrive and currentData are null
//     if (!currentData && !retrieve) {
//       console.log("Initialised triggered correctly");
//       if (storedData?.retrieve === true || !storedData) {
//         console.log("Initialised triggered on retrive true correctly");
//         setRetrieve(true); //if retrieve true (retrive from database is needed)
//       } else {
//         setCurrentData(storedData?.currentData); //update the the states variable;currentData and retrieve, to match that in session storage
//         console.log("Should run after refresh");
//         setRetrieve(false);
//       }
//     }
//   };

//   //for post request option
//   const postDataToDataBase = async (data: any) => {
//     setRetrieve(false);
//     try {
//       const response = axios.post(url, data);
//       setRetrieve(true);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   //for update request option
//   const updateDataInDataBase = async (id: any, data: any) => {
//     setRetrieve(false);
//     try {
//       const response = axios.put(`${url}/${id}`, data);
//       setRetrieve(true);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   //for delete request option
//   const deleteDataFromDataBase = async (id: any) => {
//     setRetrieve(false);
//     try {
//       const response = axios.delete(`${url}/${id}`, data);
//       setRetrieve(true);
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   const makeRequest = (method: RequestProp = "get", id: any, data: any) => {
//     if (method === "get") {
//       collectDataFromDatabase();
//       return;
//     }
//     //validate data for post and update
//     if (method === "post") {
//       if (data === null) {
//         throw new Error("data cannot be null for this request");
//       }
//       postDataToDataBase(data);
//       return;
//     }

//     //validate id for update and delete
//     if (method === "delete") {
//       if (id === null) {
//         throw new Error("Id cannot be null for this request");
//       }
//       deleteDataFromDataBase(id);
//       return;
//     }

//     if (method === "update") {
//       if (data === null) {
//         throw new Error("data cannot be null for this request");
//       }
//       if (id === null) {
//         throw new Error("Id cannot be null for this request");
//       }
//       updateDataInDataBase(id, data);
//       return;
//     }
//   };

//   useEffect(() => {
//     initialiseStoredValues();
//   }, []);

//   useEffect(() => console.log("Triggered refresh", currentData), [currentData]);

//   useEffect(() => {
//     console.log("retrieve", retrieve);
//     collectDataFromDatabase();
//   }, [retrieve]);

//   return {
//     currentData,
//     error,
//     makeRequest
//   };
// }

// export default useFetchWithSessionStorage;
