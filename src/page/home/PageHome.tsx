import type { FC } from "react";

import { Layout } from "antd";

import PageSider from "@/components/layout/sider/PageSider";
import PageContent from "@/components/layout/content/PageContent";

import "./PageHome.scss";

const PageHome: FC = () => {
  return (
    <Layout className="page-home">
      <PageSider />
      <PageContent />
    </Layout>
  );
};

export default PageHome;
