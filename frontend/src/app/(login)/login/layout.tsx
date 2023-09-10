import React from 'react';
import { Inter } from 'next/font/google';
import StyledComponentsRegistry from '@/lib/AntdRegistry';

const inter = Inter({ subsets: ['latin'] });

const Layout = ({ children }: { children: React.ReactNode }) => (
  <html lang='en'>
    <body className={inter.className}>
      <StyledComponentsRegistry>{children}</StyledComponentsRegistry>
    </body>
  </html>
);

export default Layout;
