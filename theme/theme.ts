'use client';

import { createTheme } from '@mui/material/styles';

// Breakpoints
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

// Typography
const typography = {
  h1: {
    color: '#654A4E',
    fontFamily: 'SpaceMono',
    fontSize: '2.5rem',
    fontWeight: 'normal',
    '@media (min-width:600px)': {
      fontSize: '2.5rem',
    },
    [breakpoints.values.md]: {
      fontSize: '2.5rem',
    },
  },
  h2: {
    color: '#654A4E',
    fontFamily: 'SpaceMono',
    fontSize: '2rem',
    fontWeight: 'normal',
    '@media (min-width:600px)': {
      fontSize: '2rem',
    },
    [breakpoints.values.md]: {
      fontSize: '1rem',
    },
  },
  h3: {
    color: '#654A4E',
    fontSize: '1.5rem',
    fontFamily: 'SpaceMono',
  },
  body1: {
    fontSize: '.75rem',
    fontWeight: '400',
    color: '#654A4E',
    fontFamily: 'SpaceMono',
    '@media (min-width:600px)': {
      fontSize: '.75rem',
    },
    [breakpoints.values.md]: {
      fontSize: '.75rem',
    },
  },
};

// Theme
export const theme = createTheme({
  breakpoints,
  typography,
  // Add color palette and other customizations here
});
