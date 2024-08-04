// Import Packages
import React, { useState } from 'react';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  HomeOutlined,
  BookOutlined,
  UserOutlined,
  OrderedListOutlined,
  CameraOutlined,
  InfoCircleOutlined,
  UserSwitchOutlined,
} from '@ant-design/icons';
import { Button, Layout, Menu } from 'antd';

const { Header, Sider, Content } = Layout;

const Component = ({body,index}) => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout style={{height:"100vh"}}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={index}
          items={[
            {
              key: '1',
              icon: <HomeOutlined />,
              label: 'Home',
            },
            {
              key: '2',
              icon: <BookOutlined />,
              label: 'Books',
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: 'Characters',
            },
            {
              key: '4',
              icon: <OrderedListOutlined />,
              label: 'Records',
            },
            {
              key: '5',
              icon: <CameraOutlined />,
              label: 'Extras',
            },
            {
              key: '6',
              icon: <InfoCircleOutlined />,
              label: 'About',
            },
            {
              key: '7',
              icon: <UserSwitchOutlined />,
              label: 'Admin Portal',
            },
          ]}
        />
      </Sider>
      <Layout
        style={{
            background: "#282c34",
        }}
      >
        <Header
          style={{
            padding: 0,
            background: "#282c34",
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color:'#ffffff'
            }}
          />
        </Header>
        <Content>
          {body}
        </Content>
      </Layout>
    </Layout>
  );
};
export default Component;