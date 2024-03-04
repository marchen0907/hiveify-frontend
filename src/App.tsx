import { RouterProvider } from "react-router-dom";
import { Spin } from "antd";

import "./App.scss";

import router from "@/router";
import { Suspense } from "react";

function App() {
  return (
    <Suspense fallback={<Spin size="large" />}>
      <RouterProvider router={router} fallbackElement={<Spin />} />
    </Suspense>
  );
}

export default App;
