import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Button from "@mui/material/Button";

export default function AccordianList({ items }) {
  return (
    <div>
      {items.map((item, idx) => (
        <Accordion key={`item-${idx}`}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1-content"
            id="panel1-header"
          >
            {item.title}
          </AccordionSummary>
          <AccordionDetails>{item.description}</AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
}
