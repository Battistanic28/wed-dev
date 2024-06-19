import React from 'react';
import {
  List, ListItem, Box, Button,
} from '@mui/material';

interface GroupSelectListProps {
  results: {
    first_name: string;
    last_name: string;
    full_name: string;
    response: 'yes' | 'no' | 'no response';
  }[];
  setGroup: any;
}

// TODO: harden rsvp form
export default function GroupSelectList({ results, setGroup }: GroupSelectListProps) {
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    setGroup((prevGroup: { 'full_name': string }[]) => [
      ...prevGroup,
      {
        full_name: (event.target as HTMLButtonElement).value,
      },
    ]);
  };

  return (
    <>
      <List>
        {results.map((entry) => (
          <ListItem key={entry.full_name}>
            <Box>
              {entry.full_name}
              <Button value={entry.full_name} onClick={(e) => onClick(e)}>
                +
              </Button>
            </Box>
          </ListItem>
        ))}
      </List>
      <hr />
    </>
  );
}
