"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Page from "@/components/Page";
import config from "../../config/config.json";
import CheckboxList from "@/components/CheckboxList";
import { Button } from "@mui/material";
import { useState } from "react";
import getGuestsByLastName from "@/api/helpers/getGuestsByLastName";
import postGuestResponse from "@/api/helpers/postGuestResponse";


export default function RsvpPage() {
  const { title, description } = config.RSVP;
  const [lastName, setLastName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const onClick = async () => {
    const results =  await getGuestsByLastName(lastName)
    setSearchResults(results)
  };

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
        <Box sx={{display: 'flex'}}>
          <TextField
            id="lastname"
            label="Last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <Button onClick={onClick}>
            Search
          </Button>
        </Box>
        <CheckboxList entries={searchResults} />
      </Box>
    </Page>
  );
}
