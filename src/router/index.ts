import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

const NotFound = lazy(() => import("@/page/error/NotFound"));
const UserLogin = lazy(() => import("@/page/login/UserLogin"));
const PageHome = lazy(() => import("@/page/home/PageHome"));

const PageFile = lazy(() => import("@/page/file/PageFile"));

const router = createBrowserRouter([
  {
    path: "/login",
    Component: UserLogin,
  },
  {
    path: "/",
    Component: PageHome,
    children: [
      {
        index: true,
        Component: PageFile,
      },
    ],
  },
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;
