'use client'
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Page from "@/components/Page";
import config from "../../config/config.json";
import { Button } from "@mui/material";


const { title, description } = config.RSVP;
const onClick = () => console.log('clicked')

export default function RsvpPage() {
  return (
    <Page title={title} description={description}>
      <Box
        component="form"
        sx={{
          "& .MuiTextField-root": { m: 1, width: "25ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div>
          <TextField id="lastname" label="Last name" variant="standard" />
          <Button onClick={onClick} variant="outlined">Search</Button>
        </div>
      </Box>
    </Page>
  );
}
