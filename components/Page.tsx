import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import NavBar from './NavBar';
import PasswordForm from './PasswordForm';

const authorized = false;

interface PageProps {
  children?: ReactNode;
  title: string;
  description?: string;
}

const Page: React.FC<PageProps> = ({ children, title, description }) => {
  return (
    <>
      <Typography
        variant="h1"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Nick & Kitty
      </Typography>
      {authorized ? (
        <>
          <NavBar />
          <Typography variant="h2">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
          <Box>{children}</Box>
        </>
      ) : (
        <PasswordForm />
      )}
    </>
  );
};

export default Page;
