import { useCallback, useContext, useEffect, useMemo, useState } from "react";
import { axiosClient } from "../services/axios-client";
import { AuthenticationContext } from "../context/AuthenticationContext";
import { FormatError } from "../utils/UtilMethods";
import { onFailure } from "../utils/notifications/OnFailure";
import { onSuccess } from "../utils/notifications/OnSuccess";

function useCourses() {
  const [courses, setCourses] = useState([]);
  const { authDetails } = useContext(AuthenticationContext);

  const client = axiosClient(authDetails.token);
  const [error, setError] = useState({
    message: "",
    error: "",
  });
  const [loading, setIsLoading] = useState(false);
  const [courseDetails, setCourseDetails] = useState({
    title: '',
    code: '',
    description: '',
    duration: '',
    course_type: '',
    program: '',
    objective: '',
    outlines: '',
    curriculum: '',
    image: null,
  });
  const formData = new FormData();

  const onTextChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setCourseDetails({ ...courseDetails, [name]: value });
  };

  const validateCourseDetails = () => {
    const requiredFields = [
      { key: "image", error: "Image is required", value: courseDetails.image },
      { key: "course_type", error: "Select a course type", value: courseDetails.course_type },
      { key: "program", error: "Select a program", value: courseDetails?.program },
      { key: "objective", error: "Course Objectives cannot be empty", value: courseDetails?.objective },
      { key: "outlines", error: "Course Outline cannot be empty", value: courseDetails?.outlines },
      { key: "curriculum", error: "Course Curriculum cannot be empty", value: courseDetails?.curriculum },
    ];
  
    requiredFields.forEach(({ key, error, value }) => {
      if (!value) {
        throw new Error(error);
      }
      formData.append(key, value);
    });
  
    // Append all other fields from courseDetails
    Object.entries(courseDetails).forEach(([key, value]) => {
      if (value && !requiredFields.some((field) => field.key === key)) {
        formData.append(key, value);
      }
    });
  
    // Append faculty_id separately if needed
    if (authDetails?.user?.faculty_id) {
      formData.append("faculty_id", authDetails.user.faculty_id);
    }
  };
  

  const getCourses = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await client.get("/course/getAllCourses");
      setCourses(response?.data?.allCourses);
      setIsLoading(false);
    } catch (error) {
      FormatError(error, setError, "Course Error");
      setIsLoading(false);
    }
  }, []);

  const createNewCourse = async (

    handleOnSuccess: () => void,
    edit
  ) => {
    setIsLoading(true);
    console.log(edit)
    try {
      validateCourseDetails();
      const endPoint= !edit ? `/course/addCourse` : `/course/updateCourse`
      const response = await client.post(endPoint, formData, {
        headers: {
          "Content-Type": "multipart/form-data", // Use the correct header
        },
      });
      
      console.log(response);
      console.log(courseDetails)
      handleOnSuccess();
      onSuccess({
        message: !edit ? "New Course" :"Update Course",
        success: !edit ? "Course added successfully" : "Course updated succesfully"
      })
      setIsLoading(false);
    } catch (error) {
      FormatError(error, setError, "Course Error");
    }
  };


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

  useEffect(() => {
    getCourses();
  }, []);

  return {
    courses,
    loading,
    courseDetails,
    onTextChange,
    getCourses,
    createNewCourse,
    setCourseDetails
  };
}

export default useCourses;
