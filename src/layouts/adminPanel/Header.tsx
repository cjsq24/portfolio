import React from 'react'
import { Layout, Menu, Dropdown, Breadcrumb } from 'antd';
import {
   MenuUnfoldOutlined,
   MenuFoldOutlined
} from '@ant-design/icons';
import userImage from '../../assets/user-image.png';

interface IProps {
   collapsed: boolean;
   toggle: () => void;
}

const options = (
   <Menu>
      <Menu.Item key="0">Profile</Menu.Item>
      <Menu.Item key="1">Settings</Menu.Item>
      <Menu.Divider />
      <Menu.Item key="3">Logout</Menu.Item>
   </Menu>
);

const Header = ({ collapsed, toggle }: IProps) => {
   return (
      <>
         <Layout.Header className="c-header">
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
               className: 'trigger',
               onClick: toggle,
            })}
            <div style={{ marginRight: 20 }}>
               <Dropdown overlay={options} trigger={['click']}>
                  <div className="icon-profile icon-profile-container">
                     <img src={userImage} alt="user" className="icon-profile" />
                  </div>
               </Dropdown>
            </div>
         </Layout.Header>
         <div className="breadcrumb-section">
            <Breadcrumb>
               <Breadcrumb.Item>Home</Breadcrumb.Item>
               <Breadcrumb.Item>
                  Application Center
               </Breadcrumb.Item>
               <Breadcrumb.Item>An Application</Breadcrumb.Item>
            </Breadcrumb>
         </div>
      </>
   )
}

export default Header;