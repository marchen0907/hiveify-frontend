import { createBrowserRouter } from "react-router-dom";

import { lazy } from "react";

const NotFound = lazy(() => import("@/page/error/NotFound"));
const UserLogin = lazy(() => import("@/page/login/UserLogin"));
const PageHome = lazy(() => import("@/page/home/PageHome"));

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
