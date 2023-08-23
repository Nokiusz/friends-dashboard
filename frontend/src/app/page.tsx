'use client';
import React from 'react';
import { Layout } from 'antd';

const { Content } = Layout;

const HomePage = () => {
  return (
    <Content
      style={{
        margin: '24px 24px',
        padding: 24,
        minHeight: 280,
        background: '#fff',
      }}
    >
      <main>Test</main>
    </Content>
  );
};

export default HomePage;
