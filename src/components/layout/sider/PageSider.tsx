import { FC } from "react";

import { Layout } from "antd";

const { Sider, Content } = Layout;

const PageSider: FC = () => {
  return (
    <Layout>
      <Sider width={78}>
        <div>tab</div>
      </Sider>
      <Content>
        <div>sub-tab</div>
      </Content>
    </Layout>
  );
};

export default PageSider;
