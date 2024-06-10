import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Page from '@/components/Page';
import config from '../../config/config.json'


const { title, description } = config.RSVP;


export default function FormPropsTextFields() {
  return (
    <Page title={title} description={description}>
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
            variant="standard"
            />
            <TextField
            id="lastname"
            label="Last name"
            variant="standard"
            />
        </div>
        </Box>
    </Page>
  );
}