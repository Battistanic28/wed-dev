import Link from 'next/link';
import { Typography } from '@mui/material';

interface NavLinkProps {
  title: string;
  href: string;
}

export default function NavLink({ title, href }: NavLinkProps) {
  return (
    <Link style={{ textDecoration: 'none' }} href={href}>
      <Typography variant="body1">{title}</Typography>
    </Link>
  );
}
