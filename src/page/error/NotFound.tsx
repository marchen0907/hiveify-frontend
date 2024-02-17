import type { FC } from "react";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const NotFound: FC = () => {
  const goBack = useNavigate();
  return (
    <Result
      status="404"
      title="404"
      subTitle="抱歉，您的页面走失了！"
      extra={
        <Button type="primary" onClick={() => goBack(-1)}>
          返回上页
        </Button>
      }
    />
  );
};

export default NotFound;
