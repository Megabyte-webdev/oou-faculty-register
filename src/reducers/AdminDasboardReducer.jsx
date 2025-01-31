import {admin_sidebar_keys } from "../utils/constants";

export const intialAdminDashboardState = admin_sidebar_keys.dashboard

export function AdminDasboardReducer(state, action) {
    switch (action.type) {
      case admin_sidebar_keys.dashboard.title:
        return { ...action.payload };
      case admin_sidebar_keys.courses.title:
        return { ...action.payload };
      case admin_sidebar_keys.schedules.title:
        return { ...action.payload };
      case admin_sidebar_keys.students.title:
          return { ...action.payload };
      case admin_sidebar_keys.profile.title:
        return { ...action.payload };
      case admin_sidebar_keys.activity.title:
        return { ...action.payload };
      case admin_sidebar_keys.live_classes.title:
        return { ...action.payload };
      case admin_sidebar_keys.exams.title:
        return { ...action.payload };
      default:
        return state;
    }
  }
