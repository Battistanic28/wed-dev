'use client';

import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import NavBar from './NavBar';
import { PageBody, PageFooter } from '../styles/styles';

interface PageProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

const Page: React.FC<PageProps> = ({ children, title, description }) => {
  return (
    <Box sx={PageBody}>
      <NavBar />
      <Box sx={{ marginTop: '2rem' }}>
        {title && <Typography variant="h2">{title.toLowerCase()}</Typography>}
        {description && <Typography>{description}</Typography>}
        <Box>{children}</Box>
      </Box>
      <Box sx={PageFooter}>
        <Typography>Made with ❤️ by Nick and Kitty</Typography>
      </Box>
    </Box>
  );
};

export default Page;
