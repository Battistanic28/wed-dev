"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Page from "@/components/Page";
import config from "../../config/config.json";
import { Button } from "@mui/material";
import { getAttendeesByLastName } from "@/api/helpers/getAttendeesByLastname";
import { useState } from "react";

export default function RsvpPage() {
  const { title, description } = config.RSVP;
  const [lastName, setLastName] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const onClick = async () => {
    const results = await getAttendeesByLastName(lastName);
    setSearchResults(results);
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
        <div>
          <TextField
            id="lastname"
            label="Last name"
            variant="standard"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <Button onClick={onClick} variant="outlined">
            Search
          </Button>
          <p>Results</p>
          {searchResults.map((entry, index) => (
            <Box key={index}>{entry[0]}</Box>
          ))}
        </div>
      </Box>
    </Page>
  );
}
