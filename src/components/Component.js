// Import Packages
import React, { useEffect, useState } from 'react';
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
import { Link } from 'react-router-dom';

const { Header, Sider, Content } = Layout;

const Component = ({body,index}) => {
  const [collapsed, setCollapsed] = useState(false);

  useEffect(()=>{
    if(window.innerWidth<600){
      setCollapsed(true)
    }
  },[setCollapsed])

  return (
    <Layout style={{height:"100%",minHeight:"100vh"}}>
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
              label: (<Link to='/home'>Home</Link>),
            },
            {
              key: '2',
              icon: <BookOutlined />,
              label: (<Link to='/books'>Books</Link>),
            },
            {
              key: '3',
              icon: <UserOutlined />,
              label: (<Link to='/characters'>Characters</Link>),
            },
            {
              key: '4',
              icon: <OrderedListOutlined />,
              label: (<Link to='/records'>Records</Link>),
            },
            {
              key: '5',
              icon: <CameraOutlined />,
              label: (<Link to='/extras'>Extras</Link>),
            },
            {
              key: '6',
              icon: <InfoCircleOutlined />,
              label: (<Link to='/about'>About</Link>),
            },
            {
              key: '7',
              icon: <UserSwitchOutlined />,
              label: (<Link to='/admin'>Admin Portal</Link>),
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