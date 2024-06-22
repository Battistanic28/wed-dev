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
  let initialAuthValue = false;
  if (typeof window !== 'undefined') {
    initialAuthValue = Boolean(localStorage.getItem('secret'));
  }
  const [isPassowordErrored, setIsPasswordErrored] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(initialAuthValue);

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
        <>
          <PasswordForm
            setIsAuthorized={setIsAuthorized}
            setIsPasswordErrored={setIsPasswordErrored}
          />
          {isPassowordErrored && (
            <Typography>The password you entered is incorrect</Typography>
          )}
        </>
      )}
    </>
  );
};

export default Page;
