'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Page from '@/components/Page';
import ResponseForm from '@/components/ResponseForm';
import { Button } from '@mui/material';
import { useState } from 'react';
import getGuestsByLastName from '@/api/helpers/getGuestsByLastName';
import postGuestResponse, { ResponseData } from '@/api/helpers/postGuestResponse';
import GroupSelectList from '@/components/GroupSelectList';
import config from '../../config/config.json';

export default function RsvpPage() {
  const { title, description } = config.RSVP;
  const [lastName, setLastName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [responses, setResponses] = useState<ResponseData>([]);
  const [group, setGroup] = useState([]);

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const onClick = async () => {
    const results = await getGuestsByLastName(lastName);
    setSearchResults(results);
  };

  const onSubmit = async () => {
    console.log(responses);
    await postGuestResponse(responses);
  };

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
        <Box sx={{ display: 'flex' }}>
          <TextField
            id="lastname"
            label="Last name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <Button onClick={onClick}>Search</Button>
        </Box>
        <GroupSelectList results={searchResults} setGroup={setGroup} />
        <ResponseForm selectedGroup={group} setResponses={setResponses} />
      </Box>
      <Button type="submit" onClick={onSubmit}>
        Submit
      </Button>
    </Page>
  );
}
