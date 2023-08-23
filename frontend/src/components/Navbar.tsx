import React from 'react';
import Link from 'next/link';
import {
  HeartOutlined,
  UserOutlined,
  CalendarOutlined,
} from '@ant-design/icons';
import { Menu } from 'antd';
import { usePathname } from 'next/navigation';

const Navbar = () => {
  const currentPathname = usePathname();

  const getActiveKey = (pathname: string) => {
    switch (pathname) {
      case '/profile':
        return '1';
      case '/calendar':
        return '2';
      case '/friends':
        return '3';
      default:
        return '1';
    }
  };

  const activeKey = getActiveKey(currentPathname);

  return (
    <Menu theme='dark' mode='inline' defaultSelectedKeys={[activeKey]}>
      <Menu.Item key='1' icon={<UserOutlined />}>
        <Link href='/profile'>Profile</Link>
      </Menu.Item>
      <Menu.Item key='2' icon={<CalendarOutlined />}>
        <Link href='/calendar'>Calendar</Link>
      </Menu.Item>
      <Menu.Item key='3' icon={<HeartOutlined />}>
        <Link href='/friends'>Friends</Link>
      </Menu.Item>
    </Menu>
  );
};

export default Navbar;
