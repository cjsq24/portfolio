import React from 'react'
import { Layout } from 'antd';
import Menu from './Menu';

interface IProps {
   collapsed: boolean;
   setCollapsed: (value: boolean) => void;
}

const Sidebar = ({ collapsed, setCollapsed }: IProps) => {
   return (
      <Layout.Sider
         trigger={null}
         collapsible
         collapsed={collapsed}
         breakpoint="lg"
         onBreakpoint={(broken) => {
            //console.log(broken);
            if (broken) setCollapsed(true);
         }}
         onCollapse={(collapsed, type) => {
            //console.log(collapsed, type);
         }}
      >
         <div className="logo" />
         <Menu />
      </Layout.Sider>
   )
}

export default Sidebar;