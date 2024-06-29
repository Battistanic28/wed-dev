'use client';

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Page from '@/components/Page';
import ResponseForm from '@/components/ResponseForm';
import { Button } from '@mui/material';
import { useState } from 'react';
import getGuestsByFullName from '@/api/helpers/getGuestsByFullName';
import postGuestResponse, {
  ResponseData,
} from '@/api/helpers/postGuestResponse';
import GroupSelectList from '@/components/GroupSelectList';
import config from '../../config/config.json';

export default function RsvpPage() {
  const { title, description } = config.RSVP;
  const [fullName, setFullName] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [responses, setResponses] = useState<ResponseData>([]);
  const [group, setGroup] = useState([]);

  const handleLastNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFullName(event.target.value);
  };

  const onClick = async () => {
    const results = await getGuestsByFullName(fullName);
    setSearchResults(results);
  };

  const onSubmit = async () => {
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
            id="full_name"
            label="Full name"
            value={fullName}
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
