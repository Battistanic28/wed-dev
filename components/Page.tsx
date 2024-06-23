'use client';

import React, { ReactNode, useState, useEffect } from 'react';
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
  const [isPassowordErrored, setIsPasswordErrored] = useState<boolean>(false);
  const [isAuthorized, setIsAuthorized] = useState<boolean>(false);
  const [isMounted, setIsMounted] = useState<boolean>(false);

  useEffect(() => {
    // isMounted approach is a work around for hydration errors - consider other solutions
    setIsAuthorized(Boolean(localStorage.getItem('secret')));
    setIsMounted(true);
  }, []);

  return (
    isMounted && (
      <Box sx={PageBody}>
        {isAuthorized ? (
          <>
            <NavBar />
            <Box sx={PageContent}>
              {/* <Typography variant="h2">{title}</Typography>
              <Typography variant="body2">{description}</Typography> */}
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
    )
  );
};

export default Page;
