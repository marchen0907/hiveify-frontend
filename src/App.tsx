import { RouterProvider } from "react-router-dom";
import { Spin } from "antd";

import "./App.scss";

import router from "@/router/router";

function App() {
  return <RouterProvider router={router} fallbackElement={<Spin />} />;
}

export default App;
