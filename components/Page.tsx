'use client';

import React, { ReactNode, useState } from 'react';
import { Box, Typography } from '@mui/material';
import NavBar from './NavBar';
import PasswordForm from './PasswordForm';
import { PageBody, PageContent } from './styles';

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
    <Box sx={PageBody}>
      {isAuthorized ? (
        <>
          <NavBar />
          <Box sx={PageContent}>
            <Typography variant="h2">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
            <Box>{children}</Box>
          </Box>
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
    </Box>
  );
};

export default Page;
