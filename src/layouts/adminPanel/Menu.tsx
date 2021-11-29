import React from 'react'
import { Menu } from 'antd';
import {
   UserOutlined,
   VideoCameraOutlined,
   UploadOutlined,
} from '@ant-design/icons';
import { /* Link,  */NavLink } from 'react-router-dom';

const MyMenu = () => {
   return (
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
         <Menu.Item key="1" icon={<UserOutlined />}>
            <NavLink to="/admin-panel/dashboard">
               Dashboard
            </NavLink>
         </Menu.Item>
         <Menu.Item key="2" icon={<VideoCameraOutlined />}>
            <NavLink to="/admin-panel/testing">
               Testing
            </NavLink>
         </Menu.Item>
         <Menu.Item key="3" icon={<UploadOutlined />}>
            nav 3
         </Menu.Item>
      </Menu>
   )
}

export default MyMenu;