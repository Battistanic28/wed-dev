'use client';

import React, { ReactNode } from 'react';
import { Box, Typography } from '@mui/material';
import NavBar from './NavBar';
import {
  PageBackground,
  PageBody,
  PageContent,
  BackgroundImage,
} from './styles';
import Image from 'next/image';

interface PageProps {
  children?: ReactNode;
  title?: string;
  description?: string;
}

const Page: React.FC<PageProps> = ({ children, title, description }) => {
  return (
    <Box sx={PageBackground}>
      <Box sx={PageBody}>
        <>
          <NavBar />
          <Box sx={PageContent}>
            {title && <Typography variant="h2">{title}</Typography>}
            {description && <Typography>{description}</Typography>}
            <Box>{children}</Box>
          </Box>
        </>
      </Box>
      <Box sx={BackgroundImage}>
        <Image
          fill
          src="/poppies3.jpg"
          alt="Image alt"
          style={{ objectFit: 'cover' }}
        />
      </Box>
    </Box>
  );
};

export default Page;
