import type { FC } from "react";

import { useAppSelector } from "@/store/hook";

const PageFile: FC = () => {
  const user = useAppSelector((state) => state.user);
  return <div>hello {user.email}</div>;
};

export default PageFile;
