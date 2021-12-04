import { useEffect, useCallback, useState } from "react";
import { Layout, Menu, Breadcrumb, Message } from "@arco-design/web-react";
import Login from "../Login/Login";
import BaseMenu from "../../components/BaseMenu/BaseMenu";
import WaterLevelTable from "../../components/WaterLevelTable/WaterLevelTable";
import { isLogin } from "../../api/user";
import "./Index.scss";
const Index = () => {
  const Sider = Layout.Sider;
  const Header = Layout.Header;
  const Footer = Layout.Footer;
  const Content = Layout.Content;
  const [validToken, setValidToken] = useState(false);
  useEffect(() => {
    isLogin().then((res) => {
      setValidToken(true);
    });
  }, []);
  const [collapsed, setCollapsed] = useState(false);
  const onCollapse = (collapsed: any, type: any) => {
    setCollapsed(collapsed);
  };
  return validToken ? (
    <Layout className="layout-collapse-demo">
      <Sider
        theme="light"
        breakpoint="lg"
        onCollapse={onCollapse}
        collapsed={collapsed}
        width={250}
        collapsible
      >
        <div className="logo" />
        <BaseMenu
          onClickMenuItem={(key: any) =>
            Message.info({ content: `You select ${key}`, showIcon: true })
          }
          theme="light"
          style={{ width: "100%" }}
        />
      </Sider>
      <Layout>
        <Header>{/* <BaseMenu mode="horizontal" /> */}</Header>
        <Layout style={{ padding: "0 24px" }}>
          <Breadcrumb style={{ margin: "16px 0" }}>
            {/* <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>App</Breadcrumb.Item> */}
          </Breadcrumb>
          <Content>
            <WaterLevelTable></WaterLevelTable>
          </Content>
          <Footer>地下水数据管理平台</Footer>
        </Layout>
      </Layout>
    </Layout>
  ) : (
    <Login></Login>
  );
};
export default Index;
