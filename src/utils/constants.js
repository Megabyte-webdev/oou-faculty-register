import Person from "../assets/pngs/person.png";
import PersonActive from "../assets/pngs/person-active.png";
import Message from "../assets/pngs/message.png";
import MessageActive from "../assets/pngs/message-active.png";
import PersonCaptured from "../assets/pngs/person-captured.png";
import PersonWithBoard from "../assets/pngs/person-with-board.png";
import Camera from "../assets/pngs/camera.png";
import Dashboard from "../assets/svgs/dashboard.svg";
import DashboardInactive from "../assets/svgs/dashboard-inactive.svg";
import Courses from "../assets/svgs/courses.svg";
import CoursesInactive from "../assets/svgs/courses-inactive.svg";
import Schedule from "../assets/svgs/schedule.svg";
import ScheduleInactive from "../assets/svgs/schedule-inactive.svg";
// import Instructors from '../assets/svgs/instructors.svg'
import InstructorsInactive from "../assets/svgs/instructors-inactive.svg";
import Activity from "../assets/svgs/activity.svg";
import ActivityInactive from "../assets/svgs/activity-inactive.svg";
import ColorPallete from "../assets/pngs/color-palette.png";
import WebPage from "../assets/pngs/web-page.png";
import MindAnatomy from "../assets/pngs/mind-anatomy.png";
import Microscope from "../assets/pngs/microscope.png";
import CameraWhite from "../assets/pngs/camera-white.png";
import logoutIcon from "../assets/pngs/logout.png";


export const formErrorMessages = {
  passwordMismatch: 'Password mismatch',
  selectTitle: 'Please select a title',
  accountType: 'Please select an account type'
}

export const registration_steps_keys = {
  create_account: {
    title: "User Registration",
    desc: "Enter your name, email and password.",
    activeIcon: PersonActive,
    inactiveIcon: Person,
  },
  email_verification: {
    title: "Email Verification",
    desc: "Verify your email address",
    activeIcon: MessageActive,
    inactiveIcon: Message,
  },
  person_details: {
    title: "Profile Details",
    desc: "Provide profile Pictures and job title",
    activeIcon: PersonCaptured,
    inactiveIcon: PersonCaptured,
  },
  course_details: {
    title: "Course Details",
    desc: "Choose your course details and other info",
    activeIcon: PersonWithBoard,
    inactiveIcon: PersonWithBoard,
  },
  welcome_video: {
    title: "Welcome Video",
    desc: "Start your journey with a Click",
    activeIcon: Camera,
    inactiveIcon: Camera,
  },
};

export const sidebar_keys = {
  dashboard: {
    title: "Dashboard",
    activeIcon: Dashboard,
    inactiveIcon: DashboardInactive,
    route: "/dashboard/home",
  },
  courses: {
    title: "Courses",
    activeIcon: Courses,
    inactiveIcon: CoursesInactive,
    route: "/dashboard/courses",
  },
  attendance: {
    title: "Attendance",
    activeIcon: PersonWithBoard,
    inactiveIcon: InstructorsInactive,
    route: "/dashboard/attendance",
  },
  profile: {
    title: "Profile",
    activeIcon: PersonActive,
    inactiveIcon: Person,
    route: "/dashboard/account_profile",
  },
  logout:{
    title: "Log Out",
    route: "/login",
    inactiveIcon: logoutIcon,
    activeIcon: logoutIcon,
  },
};
export const admin_sidebar_keys = {
  dashboard: {
    title: "Dashboard",
    activeIcon: Dashboard,
    inactiveIcon: DashboardInactive,
    route: "/admin/dashboard/home",
  },
  courses: {
    title: "Courses",
    activeIcon: Courses,
    inactiveIcon: CoursesInactive,
    route: "/admin/dashboard/courses",
  },
  students: {
    title: "Students",
    activeIcon: PersonWithBoard,
    inactiveIcon: InstructorsInactive,
    route: "/admin/dashboard/students",
  },
  profile: {
    title: "Profile",
    activeIcon: PersonActive,
    inactiveIcon: Person,
    route: "/admin/dashboard/account_profile",
  },
  activity: {
    title: "Activity",
    activeIcon: Activity,
    inactiveIcon: ActivityInactive,
    route: "/admin/dashboard/activity",
  },
  logout:{
    title: "Log Out",
    route: "/login",
    inactiveIcon: logoutIcon,
    activeIcon: logoutIcon,
  },
};

export const responseKeys = {
  allCourses: 'All Courses',
  Faculty: 'Single Faculty'
}