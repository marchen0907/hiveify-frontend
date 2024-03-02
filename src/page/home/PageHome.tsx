import type { FC } from "react";

import { Layout } from "antd";

import PageSider from "@/components/layout/sider/PageSider";
import PageContent from "@/components/layout/content/PageContent";

const PageHome: FC = () => {
  return (
    <Layout style={{ width: "100%" }}>
      <PageSider />
      <PageContent />
    </Layout>
  );
};

export default PageHome;
