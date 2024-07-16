import React from 'react';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@mui/material/styles';
import { theme } from '../theme/theme';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nick and Cat',
  description: 'The website for the wedding of Nick and Cat',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode,
}>) {
  return (
    <html lang="en">
      <ThemeProvider theme={theme}>
        <body className={inter.className} style={{ margin: '0px' }}>
          {children}
        </body>
      </ThemeProvider>
    </html>
  );
}
