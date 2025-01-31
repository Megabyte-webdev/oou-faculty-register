/* eslint-disable no-unused-vars */
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import React, { Suspense, lazy } from 'react';
import './App.css';
import FallbackComponent from './components/FallbackComponent';

//providers
import { NetworkStatusContextProvider } from "./context/NetworkStatusContext";
import { AuthenticationContextProvider } from "./context/AuthenticationContext";
import { ResourceContextProvider } from "./context/ResourceContext";

import { ToastContainer, toast } from "react-toastify";
import useStudentRoutes from './routes/useStudentRoutes.jsx';
// Lazy loaded components

const Login = lazy(() => import('./pages/Login.jsx'));
const NoPageFound = lazy(() => import('./pages/NoPageFound'));
function App() {

  return (
    <>
    <AuthenticationContextProvider >
      <ResourceContextProvider>
        <NetworkStatusContextProvider>
          <Suspense fallback={<FallbackComponent />}>
            <BrowserRouter>
              <Routes>
                <Route path="/" exact element={<Login />} />
                {useStudentRoutes()}
                <Route path="/*" element={<NoPageFound />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
          <ToastContainer autoClose={2000} draggable />
        </NetworkStatusContextProvider>

      </ResourceContextProvider>
    </AuthenticationContextProvider >
    </>
  );
}

export default App;
