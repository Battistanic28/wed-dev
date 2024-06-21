'use client';

import React, { ReactNode, useState } from 'react';
import { Box, Typography } from '@mui/material';
import NavBar from './NavBar';
import PasswordForm from './PasswordForm';

interface PageProps {
  children?: ReactNode;
  title: string;
  description?: string;
}

const Page: React.FC<PageProps> = ({ children, title, description }) => {
  const [isAuthorized, setIsAuthorized] = useState(false);

  return (
    <>
      <Typography
        variant="h1"
        sx={{ display: 'flex', justifyContent: 'center' }}
      >
        Nick & Kitty
      </Typography>
      {isAuthorized ? (
        <>
          <NavBar />
          <Typography variant="h2">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
          <Box>{children}</Box>
        </>
      ) : (
        <PasswordForm setIsAuthorized={setIsAuthorized} />
      )}
    </>
  );
};

export default Page;
