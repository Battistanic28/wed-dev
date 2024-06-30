import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface InfoCardProps {
  title: string;
  description: string;
}

export default function InfoCard({ title, description }: InfoCardProps) {
  return (
    <Card sx={{ margin: 1, backgroundColor: '#FC9007' }}>
      <CardContent>
        <Typography variant="body2" component="div">
          {title}
        </Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
}
