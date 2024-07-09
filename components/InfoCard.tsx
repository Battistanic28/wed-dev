import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

interface InfoCardProps {
  title: string;
  description: string;
  content?: string;
}

export default function InfoCard({
  title,
  description,
  content,
}: InfoCardProps) {
  return (
    <Card sx={{ margin: 1 }}>
      <CardContent>
        <Typography variant="body2" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Typography variant="body2">{content}</Typography>
      </CardContent>
    </Card>
  );
}
