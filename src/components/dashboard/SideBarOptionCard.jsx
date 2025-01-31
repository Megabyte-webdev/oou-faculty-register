import React, {memo, useContext} from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthenticationContext } from "../../context/AuthenticationContext";

import { onSuccess } from "../../utils/notifications/OnSuccess";
function SideBarOptionCard({option, state, dispatch, setMenu}) {
    const navigate = useNavigate()
   const {authDetails, setAuthDetails} = useContext(AuthenticationContext)
   function Logout() {
    // Get the full origin (including domain and port)
    const origin = window.location.origin;
  
    // Clear sessionStorage and localStorage specific to this origin (including port)
    if (origin) {
      // Clear all items from sessionStorage
      sessionStorage.clear();
  
      // Clear all items from localStorage
      localStorage.clear();
    }
  
    // Optionally, clear specific items if necessary
    // sessionStorage.removeItem("myToken");
    // localStorage.removeItem("primary");
  
    // Clear context or state data
    setAuthDetails(null);
  
    // Trigger success message
    onSuccess({
      message: "Logout successful",
      success: `Logged out ${authDetails?.user?.first_name} ${authDetails?.user?.last_name}`,
    });
  
    // Navigate to login page
    navigate("/", { replace: true });
  }
  

    const handleOnClick = () => {
        dispatch({type: option.title, payload: option})
        if(option.title === "Log Out") Logout();
        else navigate(option.route)
        setMenu(false)

    }

    return (
        <li onClick={handleOnClick} className={`flex w-[80%] cursor-pointer duration-100 min-h-14 justify-start gap-[10%] pl-[10px] p-[10px] items-center ${state?.title === option?.title ? 'bg-blue-700 text-white shadow-lg font-semibold rounded-[15px]' : 'hover:scale-105 text-gray-800 font-medium'}`}>
            <img className='h-[25px]' src={state.title === option.title ? option.activeIcon : option.inactiveIcon}/>
            <span>{option.title}</span>
        </li>
    )
}

export default memo(SideBarOptionCard)
