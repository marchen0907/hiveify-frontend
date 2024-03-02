import type { FC } from "react";

import { Layout, Avatar, Dropdown, Button } from "antd";
import type { MenuProps } from "antd";
import { CloudSyncOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import classnames from "classnames";

import { useAppDispatch } from "@/store/hook";
import { removeUser } from "@/store/modules/userSlice";
import { Logo, Folder, Transmission, Setting } from "./SiderIcon";

import "./PageSider.scss";

const { Sider } = Layout;

const PageSider: FC = () => {
  const location = useLocation();
  const [cookies, , removeCookie] = useCookies<string>(["Authorization"]);
  const dispatch = useAppDispatch();

  const onClick: MenuProps["onClick"] = ({ key }) => {
    if (key === "signOut") {
      if (cookies) {
        removeCookie("Authorization");
      }
      dispatch(removeUser());
    }
  };

  const items: MenuProps["items"] = [
    {
      key: "setting",
      label: <Link to="/setting">设置</Link>,
    },
    {
      type: "divider",
    },
    {
      key: "signOut",
      label: "退出登录",
    },
  ];

  return (
    <>
      <Sider width={78} theme="light">
        <div className="sider-tab">
          <div className="sider-tab-top">
            <Logo className="logo" />
            <Link
              className={classnames("sider-tab-item", {
                "is-active": location.pathname === "/home",
              })}
              to="/home"
            >
              <Folder className="sider-tab-item-icon" />
              <span className="sider-tab-item-text">文件</span>
            </Link>
            <Link
              className={classnames("sider-tab-item", {
                "is-active": location.pathname === "/transmission",
              })}
              to="/transmission"
            >
              <Transmission className="sider-tab-item-icon" />
              <span className="sider-tab-item-text">传输</span>
            </Link>
            <Link
              className={classnames("sider-tab-item", {
                "is-active": location.pathname === "/sync",
              })}
              to="/sync"
            >
              <CloudSyncOutlined className="sider-tab-item-icon" />
              <span className="sider-tab-item-text">同步</span>
            </Link>
          </div>
          <div className="sider-tab-bottom">
            <Dropdown menu={{ items, onClick }} placement="topLeft">
              <Button
                className="sider-tab-setting"
                size="large"
                shape="circle"
                icon={<Setting />}
              />
            </Dropdown>
            <Link to="/userInfo">
              <Avatar
                size="large"
                icon={<UserOutlined />}
                className="sider-tab-user"
              />
            </Link>
          </div>
        </div>
      </Sider>
      <Sider width={168} theme="light">
        <div className="sub-tab">sub-tab</div>
      </Sider>
    </>
  );
};

export default PageSider;
