import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";

// 使用lazy函数动态导入组件，当路由匹配到时才加载
const NotFound = lazy(() => import("@/page/error/NotFound"));
const UserLogin = lazy(() => import("@/page/login/UserLogin"));
const PageHome = lazy(() => import("@/page/home/PageHome"));
const PageNode = lazy(() => import("@/page/file/PageNode"));

// 使用createBrowserRouter函数创建路由
const router = createBrowserRouter([
  {
    path: "/", // 当URL为/时，渲染UserLogin组件
    Component: UserLogin,
  },
  {
    path: "/home", // 当URL为/home时，渲染PageHome组件
    Component: PageHome,
    children: [
      {
        index: true, // 当URL为/home时，渲染PageNode组件
        Component: PageNode,
      },
    ],
  },
  {
    path: "*", // 当URL不匹配以上任何路径时，渲染NotFound组件
    Component: NotFound,
  },
]);

// 导出router
export default router;
