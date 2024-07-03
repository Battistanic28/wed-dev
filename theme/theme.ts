'use client';

import { createTheme } from '@mui/material/styles';
import { Schoolbell } from 'next/font/google';

export const theme = createTheme();

// Fonts
const schoolbell = Schoolbell({
  subsets: ['latin'],
  weight: '400',
});

// Palette
// Add color palette

// Typography
theme.typography.h1 = {
  fontSize: '2.5rem',
  fontWeight: 'normal',
  '@media (min-width:600px)': {
    fontSize: '2.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2.5rem',
  },
};

theme.typography.h2 = {
  fontSize: '1.5rem',
  fontWeight: 'normal',
  fontFamily: schoolbell.style.fontFamily,
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

theme.typography.h3 = {
  fontFamily: schoolbell.style.fontFamily,
};

theme.typography.body1 = {
  fontSize: '.75rem',
  fontWeight: 'normal',
  fontFamily: schoolbell.style.fontFamily,
  '@media (min-width:600px)': {
    fontSize: '.75rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '.75rem',
  },
};

// Breakpoints
theme.breakpoints.values = {
  xs: 0,
  sm: 600,
  md: 900,
  lg: 1200,
  xl: 1536,
};
