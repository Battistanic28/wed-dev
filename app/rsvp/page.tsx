import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Page from '@/components/Page';

export default function FormPropsTextFields() {
  return (
    <Page>
        <Box
        component="form"
        sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
        >
        <div>
            <TextField
            id="firstname"
            label="First name"
            type="password"
            variant="standard"
            />
            <TextField
            id="lastname"
            label="Last name"
            type="password"
            variant="standard"
            />
            <TextField
            id="email"
            label="Email"
            type="password"
            variant="standard"
            />
        </div>
        </Box>
    </Page>
  );
}