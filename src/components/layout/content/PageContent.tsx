import { FC, useState, useEffect } from "react";

import { Layout, Breadcrumb, Button, Modal, Input } from "antd";
import type { ItemType } from "antd/es/breadcrumb/Breadcrumb";
import {
  SearchOutlined,
  FileOutlined,
  FolderOutlined,
} from "@ant-design/icons";
import { Outlet, useLocation, Link } from "react-router-dom";

import "./PageContent.scss";

const { Header, Content } = Layout;

const PageContent: FC = () => {
  const location = useLocation();
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [searchValue, setSearchValue] = useState<string>("");

  interface SearchResult {
    id: string;
    type: "file" | "folder";
    name: string;
  }
  const [searchResult, setSearchResult] = useState<SearchResult[]>([]);

  const titleMap: Map<string, string> = new Map([
    ["/group/image", "图片"],
    ["/group/document", "文档"],
    ["/group/video", "视频"],
    ["/group/audio", "音频"],
    ["/group/other", "其他"],
    ["/group/recycle", "回收站"],
    ["/transmission/upload", "上传"],
    ["/transmission/download", "下载"],
    ["/transmission/finished", "已完成"],
    ["/sync", "自动同步"],
  ]);

  const breadcrumbItems: ItemType[] = [
    {
      path: "/home",
      title: "文件",
    },
    {
      path: "/test",
      title: "测试",
    },
  ];

  const itemRender = (item: ItemType) => {
    return <Link to={item.path!}>{item.title}</Link>;
  };

  const handleOpen = () => {
    setModalOpen(true);
  };

  const handleCancel = () => {
    setModalOpen(false);
  };

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchValue(value);
    if (value === "") {
      return;
    }
    console.log(value);
  };

  useEffect(() => {
    setSearchResult([
      {
        id: "112334",
        type: "file",
        name: "test",
      },
      {
        id: "21234",
        type: "folder",
        name: "test",
      },
    ]);
  }, []);

  return (
    <Layout className="page-content">
      <Header>
        <div className="content-header">
          <div className="header-title">
            {titleMap.has(location.pathname) ? (
              <span>{titleMap.get(location.pathname)}</span>
            ) : (
              <Breadcrumb
                separator=">"
                itemRender={itemRender}
                items={breadcrumbItems}
              />
            )}
          </div>
          <Button
            type="primary"
            icon={<SearchOutlined />}
            onClick={handleOpen}
            className="header-search"
          >
            搜索网盘中的文件
          </Button>
        </div>
        <Modal
          open={modalOpen}
          width={600}
          title={
            <Input
              placeholder="搜索文件"
              allowClear={{ clearIcon: "清空" }}
              onChange={onChange}
              variant="borderless"
              className="header-search-input"
            />
          }
          mask={false}
          onCancel={handleCancel}
          footer={null}
          className="header-search-modal"
        >
          <ul className="search-result">
            {searchResult.map((item) => (
              <li key={item.id} className="search-result-item">
                {item.type === "file" ? <FileOutlined /> : <FolderOutlined />}
                <p>{item.name}</p>
              </li>
            ))}
          </ul>
          {searchValue !== "" && (
            <div className="search-result-footer">
              <SearchOutlined />
              <p>
                查看 <b>{searchValue}</b> 的所有搜索结果
              </p>
            </div>
          )}
        </Modal>
      </Header>
      <Content>
        <Outlet />
      </Content>
    </Layout>
  );
};

export default PageContent;
