import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'
import DashboardLayout from '../layout/DashboardLayout'

const useStudentRoutes = () => {

    //Dashboard
    const Dashboard = lazy(() => import('../pages/Dashboard'))

    return (
        <>

            <Route path='dashboard' element={<DashboardLayout />}>
                <Route path='/dashboard/home' element={<Dashboard />} />

            </Route>
        </>
    )
}

export default useStudentRoutes