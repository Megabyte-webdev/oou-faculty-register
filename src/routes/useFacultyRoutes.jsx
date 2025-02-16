import { lazy } from 'react'
import { Route } from 'react-router-dom'
import DashboardLayout from '../layout/DashboardLayout'
import AttendancePage from '../pages/AttendancePage'

const useFacultyRoutes = () => {

    //Dashboard
    const Dashboard = lazy(() => import('../pages/Dashboard'))
    const Courses = lazy(() => import('../pages/Courses'))

    return (
        <>

            <Route path='dashboard' element={<DashboardLayout />}>
                <Route path='/dashboard/home' element={<Dashboard />} />
                <Route path='/dashboard/courses' element={<Courses />} />
                <Route path='/dashboard/attendance' element={<AttendancePage />} />

            </Route>
        </>
    )
}

export default useFacultyRoutes