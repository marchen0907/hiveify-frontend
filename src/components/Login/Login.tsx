import { useState } from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Spin, message } from "antd";
import { useCookies } from "react-cookie";

import { login } from "@/api/user";

import "./Login.scss";

interface LoginInfo {
  email: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [, setCookie] = useCookies(["Authorization"]);

  const onFinish = (values: LoginInfo) => {
    setLoading(true);
    login(values.email, values.password)
      .then((res: any) => {
        message.success(res.message);
        const expirationDate = new Date();
        expirationDate.setHours(expirationDate.getHours() + 24);
        setCookie("Authorization", res.data, {
          expires: expirationDate,
        });
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return (
    <div className="login">
      <div className="main">
        <div className="register">
          <h1>
            Hiveify
            <br />
            网盘
          </h1>
          <p>
            如果你没有账号
            <br />
            可以<a href="#">点击这里</a>进行注册.
          </p>
        </div>
        <div className="form">
          <Form initialValues={{ remember: true }} onFinish={onFinish}>
            <Form.Item<LoginInfo>
              name="email"
              rules={[
                { required: true, message: "请输入邮箱！" },
                { type: "email", message: "请输入正确的邮箱！" },
              ]}
            >
              <Input
                prefix={<UserOutlined className="item-icon" />}
                placeholder="邮箱"
              />
            </Form.Item>
            <Form.Item<LoginInfo>
              name="password"
              rules={[
                { required: true, message: "请输入密码！" },
                { min: 8, message: "密码长度至少为8位！" },
              ]}
            >
              <Input.Password
                prefix={<LockOutlined className="item-icon" />}
                type="password"
                placeholder="密码"
              />
            </Form.Item>
            <Form.Item className="other">
              <Form.Item<LoginInfo>
                name="remember"
                valuePropName="checked"
                noStyle
              >
                <Checkbox>下次自动登录</Checkbox>
              </Form.Item>

              <a href="#">忘记密码</a>
            </Form.Item>

            <Form.Item>
              <Spin spinning={loading}>
                <Button type="primary" htmlType="submit" className="submit-btn">
                  登陆
                </Button>
              </Spin>
            </Form.Item>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
