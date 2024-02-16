import { createBrowserRouter } from "react-router-dom";

import { lazy } from "react";

const NotFound = lazy(() => import("@/components/error/NotFound"));
const UserLogin = lazy(() => import("@/components/login/UserLogin"));
const PageHome = lazy(() => import("@/components/home/PageHome"));

const router = createBrowserRouter([
  {
    path: "*",
    Component: NotFound,
  },
  {
    path: "/login",
    Component: UserLogin,
  },
  {
    path: "/",
    Component: PageHome,
  },
]);

export default router;
