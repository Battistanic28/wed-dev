'use client';

import { createTheme } from '@mui/material/styles';

export const theme = createTheme();

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
  '@media (min-width:600px)': {
    fontSize: '1.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '1rem',
  },
};

theme.typography.h3 = {};

theme.typography.body1 = {
  fontSize: '.75rem',
  fontWeight: '400',
  color: '#654A4E',
  fontFamily: 'SpaceMono',
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
