import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Page from '@/components/Page';
import config from '../../config/config.json'
import { Button } from '@mui/material';


const { title, description } = config.RSVP;

// Initial array filtering approach
// TODO: Move functions out of components
const attendees = ["Barker", "Doe", "Blobins", "Blobins"]
const filter = attendees.filter(item => {
  return item === 'Blobins'
})


export default function FormPropsTextFields() {
  console.log(filter)
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
            id="lastname"
            label="Last name"
            variant="standard"
            />
            <Button variant="outlined">Search</Button>
        </div>
        </Box>
    </Page>
  );
}