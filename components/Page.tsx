import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import { redirect } from 'next/navigation';
import NavBar from './NavBar';

const token = true;

interface PageProps {
  children?: ReactNode;
  title: string;
  description?: string;
}

const Page: React.FC<PageProps> = ({ children, title, description }) => {
  if (!token) {
    return redirect('/auth');
  }
  return (
    <>
      <Typography
        variant="h1"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Nick & Kitty
      </Typography>
      <NavBar />
      <Typography variant="h2">{title}</Typography>
      <Typography variant="body2">{description}</Typography>
      <Box>{children}</Box>
    </>
  );
};

export default Page;
