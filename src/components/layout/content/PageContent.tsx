import { FC } from "react";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";

import "./PageContent.scss";

const { Header, Content } = Layout;

const PageContent: FC = () => {
  return (
    <Layout>
      <Header>
        <div className="content-header">header</div>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default PageContent;
