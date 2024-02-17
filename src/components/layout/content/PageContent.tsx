import { FC } from "react";

import { Layout } from "antd";
import { Outlet } from "react-router-dom";

const { Header, Content } = Layout;

const PageContent: FC = () => {
  return (
    <Layout>
      <Header>
        <div>header</div>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default PageContent;
