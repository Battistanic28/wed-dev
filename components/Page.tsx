'use client';

import React, { ReactNode } from 'react';
import { Box, Typography, Divider } from '@mui/material';
import NavBar from './NavBar';
import { PageBody } from './styles';

interface PageProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

const Page: React.FC<PageProps> = ({ children, title, description }) => {
  return (
    <Box sx={PageBody}>
      <NavBar />
      {/* <Divider sx={{ maxWidth: '500px', margin: 'auto' }} /> */}
      <Box sx={{ marginTop: '2rem' }}>
        {title && <Typography variant="h2">{title}</Typography>}
        {description && <Typography>{description}</Typography>}
        <Box>{children}</Box>
      </Box>
    </Box>
  );
};

export default Page;
