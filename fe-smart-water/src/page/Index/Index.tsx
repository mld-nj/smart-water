import { useEffect, useCallback, useState } from "react";
import {
  Layout,
  Menu,
  Breadcrumb,
  Message,
  Tabs,
  Typography,
} from "@arco-design/web-react";
import Login from "../Login/Login";
import BaseMenu from "../../components/BaseMenu/BaseMenu";
import WaterLevelTable from "../../components/WaterLevelTable/WaterLevelTable";
import { isLogin } from "../../api/user";
import "./Index.scss";
const Index = () => {
  const Sider = Layout.Sider;
  const Footer = Layout.Footer;
  const Content = Layout.Content;
  const TabPane = Tabs.TabPane;
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
        <Layout>
          <Content>
            <Tabs
              defaultActiveTab="1"
              style={{
                marginBottom: 20,
                marginTop: 20,
              }}
            >
              <TabPane key="1" title="水位">
                <Typography.Paragraph>
                  <WaterLevelTable></WaterLevelTable>
                </Typography.Paragraph>
              </TabPane>
              <TabPane key="2" title="蒸发量">
                <Typography.Paragraph>
                  Content of Tab Panel 2
                </Typography.Paragraph>
              </TabPane>
              <TabPane key="3" title="降水量">
                <Typography.Paragraph>
                  Content of Tab Panel 3
                </Typography.Paragraph>
              </TabPane>
            </Tabs>
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
