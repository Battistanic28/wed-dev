import { useState } from 'react';
import React from "react";
import {
  List,
  ListItem,
  Box,
  Button
} from "@mui/material";
import postGuestResponse from '@/api/helpers/postGuestResponse';

interface CheckboxListProps {
  entries: {
    first_name: string;
    last_name: string;
    full_name: string;
    response: "yes" | "no" | "no response";
  }[]
}

type Response = {
  full_name: string;
  response: string;
};

// TODO: harden rsvp form
export default function CheckboxList({ entries }: CheckboxListProps) {
  const [responses, setResponses] = useState<Response[]>([]);

  const onClick = (fullName: string, response: string) => {
    setResponses(prevResponses => [
      ...prevResponses,
      {
        full_name: fullName,
        response: response
      }
    ])
  }

  const onSubmit = async () => {
    await postGuestResponse(responses)
  }

  return (
    <List>
      {entries.map((entry, idx) => {
        return (
            <ListItem key={entry.full_name}>
              <Box>
                {entry.full_name}
                <Button onClick={() => onClick(entry.full_name, 'Yes')}>Yes</Button>
                <Button onClick={() => onClick(entry.full_name, 'No')}>No</Button>
              </Box>
            </ListItem>
        );
      })}
      <Button type='submit' onClick={onSubmit}>Submit</Button>
    </List>
  );
}
