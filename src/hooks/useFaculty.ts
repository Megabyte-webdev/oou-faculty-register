import { useContext, useEffect, useState } from "react";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { axiosClient } from "../services/axios-client";
import { FormatError } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";
import { AxiosResponse } from "axios";

function useFaculty() {
  const { authDetails } = useContext(AuthenticationContext);
  const client = axiosClient(authDetails?.token);
  const [faculties, setFaculties] = useState([]);
  const [courses, setCourses] = useState([]);
  const [faculty, setFaculty] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({
    message: "",
    error: "",
  });

  const getAllfaculties = async () => {
    try {
      const response: AxiosResponse<any, any> = await client.get(
        `/schedule/scheduleByInstructorId/${authDetails?.user?.id}`
      );

      setFaculties(response?.data?.faculties);
    } catch (error) {
      FormatError(error, setError, "Faculties Error");
    }
  };
  const getEveryfaculty = async () => {
    try {
      const response: AxiosResponse<any, any> = await client.get(
        `/faculty/getAllFaculty`
      );

      setFaculties(response?.data?.allFaculty);
    } catch (error) {
      FormatError(error, setError, "Faculties Error");
    }
  };

  const getAllfacultiesWithCourses = async () => {
    try {
      const response: AxiosResponse<any, any> = await client.get(
        `/faculty/getFacultyWithCourse`
      );

      setCourses(response?.data?.Faculty);
    } catch (error) {
      FormatError(error, setError, "Faculties Error");
    }
  };

  const getAllCoursesByFaculty = (): any[] => {
    if (courses.length === 0) return [];

    return courses.filter(
      (currentCourse: any) =>
        currentCourse?.faculty_id === Number(authDetails?.user?.faculty_id)
    );
  };

  const getByfacultyById = async () => {
    try {
      const response: AxiosResponse<any, any> = await client.get(
        `/faculty/getFacultyById/${authDetails?.user?.faculty_id}`
      );
      setFaculty(response?.data?.Faculty);
    } catch (error) {
      FormatError(error, setError, "Faculties Error");
    }
  };

  useEffect(() => {
    if (error.message && error.error) {
      onFailure(error);
    }
  }, [error.message, error.error]);

  return {
    faculties,
    faculty,
    courses,
    getAllfaculties,
    getByfacultyById,
    getAllfacultiesWithCourses,
    getAllCoursesByFaculty,
    getEveryfaculty
  };
}

export default useFaculty;
