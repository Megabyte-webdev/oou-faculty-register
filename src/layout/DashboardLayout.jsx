import React, { useReducer, useState, useContext } from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom'; // Import Navigate to redirect
import { AuthenticationContext } from '../context/AuthenticationContext'; // Assuming your auth context is here
import NavBar from '../components/dashboard/NavBar';
import SideBar from '../components/dashboard/SideBar';
import { DasboardReducer, intialDashboardState } from '../reducers/DasboardReducer';
import { sidebar_keys } from '../utils/constants';
import SideBarOptionCard from '../components/dashboard/SideBarOptionCard';
import { getInitialDashboardState } from '../utils/DashboardUtilMethods';

function DashboardLayout() {
  const location = useLocation();
  const { authDetails } = useContext(AuthenticationContext); // Accessing auth details
  const [state, dispatch] = useReducer(DasboardReducer, getInitialDashboardState(location.pathname, intialDashboardState));
  const [menu, setMenu] = useState(false);

  // If user is not authenticated, redirect to login page
  if (!["individual", "student", "user"].includes(authDetails?.user?.role?.toLowerCase())) {
    return <Navigate to="/login" replace />;
  }
  

  const getSideBarOptions = () => {
    return Object.keys(sidebar_keys).map((currentKey) => {
      const currentOption = sidebar_keys[currentKey];
      return (
        <SideBarOptionCard
          state={state}
          dispatch={dispatch}
          option={currentOption}
          key={currentOption.title}
          setMenu={setMenu}
        />
      );
    });
  };

  return (
    <main className="w-[100vw] h-screen flex overflow-hidden">
      <SideBar menu={menu} setMenu={setMenu}>
        {getSideBarOptions(state, dispatch)}
      </SideBar>

      <section className="flex-1 w-full min-h-full overflow-y-auto bg-gray-100 flex flex-col">
        <NavBar title={state.title} menu={menu} setMenu={setMenu} />
        <Outlet />
      </section>
    </main>
  );
}

export default DashboardLayout;
