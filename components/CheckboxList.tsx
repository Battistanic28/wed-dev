import { useState } from 'react';
import React from "react";
import {
  List,
  ListItem,
  ListItemText,
  Checkbox,
  ListItemAvatar,
  Avatar,
  ListItemSecondaryAction
} from "@mui/material";


export default function CheckboxList({ entries }) {
  const [checked, setChecked] = useState([1]);

  const handleToggle = (entry: number) => () => {
    const currentIndex = checked.indexOf(entry);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(entry);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List>
      {entries.map((entry) => {
        const labelId = `checkbox-list-secondary-label-${entry}`;
        return (
          <ListItem key={entry} onClick={handleToggle(entry)}>
            <ListItemAvatar>
              <Avatar />
            </ListItemAvatar>
            <ListItemText id={labelId} primary={entry[0]} />
            <ListItemSecondaryAction>
              <Checkbox
                edge="end"
                onChange={handleToggle(entry)}
                checked={checked.indexOf(entry) !== -1}
                inputProps={{ "aria-labelledby": labelId }}
              />
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
