'use client';
import React from 'react';

import { useEffect } from 'react';
import { Box } from '@mui/material';
// import { animateHeroText } from '../components/animations';
import { TransitionElement } from '@/styles/styles';

export default function Template({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    // animatePageIn();
    // animateHeroText();
  }, []);

  return (
    <div>
      <Box id="transition-element" sx={TransitionElement}></Box>
      {children}
    </div>
  );
}
