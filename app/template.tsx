'use client';
import React from 'react';

import { useEffect } from 'react';
import { Box } from '@mui/material';
import { animatePageIn } from '../components/animations';
import { TransitionElement } from '@/components/styles';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    animatePageIn();
  }, []);

  return (
    <div>
      <Box id="transition-element" sx={TransitionElement}></Box>
      {children}
    </div>
  );
}
