import {sidebar_keys } from "../utils/constants";

export const intialDashboardState = sidebar_keys.dashboard

export function DasboardReducer(state, action) {
    switch (action?.type) {
      case sidebar_keys?.dashboard?.title:
        return { ...action.payload };
      case sidebar_keys?.courses?.title:
        return { ...action.payload };
      case sidebar_keys?.attendance?.title:
        return { ...action.payload };
      case sidebar_keys?.profile?.title:
        return { ...action.payload }
      default:
        return state;
    }
  }