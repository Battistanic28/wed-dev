import Link from 'next/link';
import { Typography } from '@mui/material';

interface NavLinkProps {
  title: string;
  href: string;
}

export default function NavLink({ title, href }: NavLinkProps) {
  return (
    // Refactor to apply sx props
    <Link style={{ textDecoration: 'none', color: 'inherit' }} href={href}>
      <Typography variant="body1">{title}</Typography>
    </Link>
  );
}
