import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

interface CalendarCardProps {
  title: string;
  description: string;
  content?: string;
  day: string; // e.g., 'Fri'
  date: string; // e.g., '26'
  month: string; // e.g., 'June'
  href: string;
}

export default function CalendarCard({
  title,
  description,
  content,
  day,
  date,
  month,
  href,
}: CalendarCardProps) {
  return (
    <Card sx={{ margin: 1 }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ marginRight: 2, textAlign: 'center' }}>
            <Typography variant="body2">{day}</Typography>
            <Typography variant="h4">{date}</Typography>
            <Typography variant="body2">{month}</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
            <Typography variant="h3">{title}</Typography>
            <Typography variant="body2">{description}</Typography>
            <Typography variant="body2">{content}</Typography>
            {/* TODO: Update with cal links when details are finalized */}
            {/* use https://www.labnol.org/calendar/ to generate links */}
            <a href={href} target="_blank">
              Add to Calendar
            </a>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
