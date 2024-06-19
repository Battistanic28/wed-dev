import React from "react";
import { List, ListItem, Box, Button, Typography } from "@mui/material";

type Group = {
  full_name: string;
  response: "yes" | "no" | "no response";
}[];

interface ResponseFormProps {
    selectedGroup: Group;
    setResponses: any;
}

export default function ResponseForm({ selectedGroup, setResponses }: ResponseFormProps) {

  // TODO: following submission - thank for registering and display list of responses 
  const registerEntry = (fullName: string, response: string) => {
    setResponses((prevResponses: Group) => [
      ...prevResponses,
      {
        full_name: fullName,
        response: response
      }
    ])
  }


  return (
    <>
      <Typography>Group</Typography>
      <List>
        {selectedGroup.map((entry) => {
          return (
            <ListItem key={entry.full_name}>
              <Box>
                {entry.full_name}
                <Button onClick={() => registerEntry(entry.full_name, "Yes")}>
                  Yes
                </Button>
                <Button onClick={() => registerEntry(entry.full_name, "No")}>
                  No
                </Button>
              </Box>
            </ListItem>
          );
        })}
      </List>
    </>
  );
}
