import SideBarOptionCard from "../components/dashboard/SideBarOptionCard";
import { admin_sidebar_keys, sidebar_keys } from "./constants";

// export const getSideBarOptions = (state, dispatch) => {
//   return Object.keys(sidebar_keys).map((currentKey) => {
//     const currentOption = sidebar_keys[currentKey];
//     return (
//       <SideBarOptionCard
//         state={state}
//         dispatch={dispatch}
//         option={currentOption}
//         key={currentOption.title}
//       />
//     );
//   });
// };


export const getImageURL = (e, setPhotoUrl) => {
  const { name } = e.target;
  const file = e.target.files[0]; //filelist is an object carrying all details of file, .files[0] collects the value from key 0 (not array), and stores it in file

  if (file && (file.type === "image/jpeg" || file.type === "image/png")) {
    // You can also perform additional actions with the valid file
    const generatedUrl = URL.createObjectURL(file);
    setPhotoUrl(generatedUrl)
  } else {
    // Handle invalid file type
    alert("Please select a valid JPEG or PNG file.");
  }
};

export const getInitialDashboardState = (extractedRoute, intialDashboardState) => {
  let stateToReturn = null;

  Object.keys(sidebar_keys).map((currentKey) => {
    const currentOption = sidebar_keys[currentKey];
    if (extractedRoute.includes(currentOption.route)) {
      stateToReturn = currentOption;
      return;
    }
  });

  return stateToReturn ? stateToReturn : intialDashboardState;
};

export const getInitialAdminDashboardState = (extractedRoute, intialDashboardState) => {
  let stateToReturn = null;

  Object.keys(admin_sidebar_keys).map((currentKey) => {
    const currentOption = admin_sidebar_keys[currentKey];
    if (extractedRoute.includes(currentOption.route)) {
      stateToReturn = currentOption;
      return;
    }
  });

  return stateToReturn ? stateToReturn : intialDashboardState;
};
