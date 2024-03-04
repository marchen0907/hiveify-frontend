import type { FC } from "react";

import { Layout, Avatar, Dropdown, Button, Divider } from "antd";
import type { MenuProps } from "antd";
import { CloudSyncOutlined, UserOutlined } from "@ant-design/icons";
import { Link, useLocation } from "react-router-dom";
import { useCookies } from "react-cookie";
import classnames from "classnames";

import { useAppDispatch } from "@/store/hook";
import { removeUser } from "@/store/modules/userSlice";
import {
  LogoIcon,
  FolderIcon,
  TransmissionIcon,
  SettingIcon,
  ImageIcon,
  DocumentIcon,
  VideoIcon,
  AudioIcon,
  OtherIcon,
  UploadIcon,
  DownloadIcon,
  SucceedIcon,
  SyncIcon,
} from "./SiderIcon";

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

  const GroupSub = () => {
    return (
      <>
        <Link
          to="/group/image"
          className={classnames("sub-tab-item", {
            "is-active": location.pathname === "/group/image",
          })}
        >
          <ImageIcon />
          <span className="sub-tab-item-text">图片</span>
        </Link>
        <Link
          to="/group/document"
          className={classnames("sub-tab-item", {
            "is-active": location.pathname === "/group/document",
          })}
        >
          <DocumentIcon />
          <span className="sub-tab-item-text">文档</span>
        </Link>
        <Link
          to="/group/video"
          className={classnames("sub-tab-item", {
            "is-active": location.pathname === "/group/video",
          })}
        >
          <VideoIcon />
          <span className="sub-tab-item-text">视频</span>
        </Link>
        <Link
          to="/group/audio"
          className={classnames("sub-tab-item", {
            "is-active": location.pathname === "/group/audio",
          })}
        >
          <AudioIcon />
          <span className="sub-tab-item-text">音频</span>
        </Link>
        <Link
          to="/group/other"
          className={classnames("sub-tab-item", {
            "is-active": location.pathname === "/group/other",
          })}
        >
          <OtherIcon />
          <span className="sub-tab-item-text">其他</span>
        </Link>
        <Divider />
        <Link
          to="/group/recycle"
          className={classnames("sub-tab-item", {
            "is-active": location.pathname === "/group/recycle",
          })}
        >
          <span>回收站</span>
        </Link>
      </>
    );
  };

  const TransmissionSub = () => {
    return (
      <>
        <Link
          to="/transmission/upload"
          className={classnames("sub-tab-item", {
            "is-active": location.pathname === "/transmission/upload",
          })}
        >
          <UploadIcon />
          <span className="sub-tab-item-text">上传</span>
        </Link>
        <Link
          to="/transmission/upload"
          className={classnames("sub-tab-item", {
            "is-active": location.pathname === "/transmission/download",
          })}
        >
          <DownloadIcon />
          <span className="sub-tab-item-text">下载</span>
        </Link>
        <Link
          to="/transmission/finished"
          className={classnames("sub-tab-item", {
            "is-active": location.pathname === "/transmission/finished",
          })}
        >
          <SucceedIcon />
          <span className="sub-tab-item-text">已完成</span>
        </Link>
      </>
    );
  };

  const SyncSub = () => {
    return (
      <>
        <SyncIcon className="sync-icon" />
        <span className="sync-name">Laptop-wujunyi</span>
        <span className="sync-system">linux</span>
      </>
    );
  };

  const ShowSubTab = () => {
    if (location.pathname.startsWith("/transmission/")) {
      return <TransmissionSub />;
    } else if (location.pathname.startsWith("/sync/")) {
      return <SyncSub />;
    } else {
      return <GroupSub />;
    }
  };

  return (
    <>
      <Sider width={78} theme="light">
        <div className="sider-tab">
          <div className="sider-tab-top">
            <LogoIcon className="logo" />
            <Link
              className={classnames("sider-tab-item", {
                "is-active": location.pathname === "/home",
              })}
              to="/home"
            >
              <FolderIcon className="sider-tab-item-icon" />
              <span className="sider-tab-item-text">文件</span>
            </Link>
            <Link
              className={classnames("sider-tab-item", {
                "is-active": location.pathname === "/transmission",
              })}
              to="/transmission"
            >
              <TransmissionIcon className="sider-tab-item-icon" />
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
                icon={<SettingIcon />}
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
        <div className="sub-tab">
          <div className="sub-tab-content">
            <ShowSubTab />
          </div>
        </div>
      </Sider>
    </>
  );
};

export default PageSider;
