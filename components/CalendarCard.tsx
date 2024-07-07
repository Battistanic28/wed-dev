import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

interface InfoCardProps {
  title: string;
  description: string;
  content?: string;
  day: string; // e.g., 'Fri'
  date: string; // e.g., '26'
  month: string; // e.g., 'June'
}

export default function InfoCard({
  title,
  description,
  content,
  day,
  date,
  month,
}: InfoCardProps) {
  return (
    <Card sx={{ margin: 1, backgroundColor: '#FC9007' }}>
      <CardContent>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Box sx={{ marginRight: 2, textAlign: 'center' }}>
            <Typography variant="body2">{day}</Typography>
            <Typography variant="h4">{date}</Typography>
            <Typography variant="body2">{month}</Typography>
          </Box>
          <Box sx={{ flexGrow: 1, textAlign: 'right' }}>
            <Typography variant="h3" component="h3">
              {title}
            </Typography>
            <Typography variant="body2">{description}</Typography>
            <Typography variant="body2">{content}</Typography>
            <Link href="TODO">Add to Calendar</Link>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
