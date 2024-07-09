'use client';

import { useRouter } from 'next/navigation';
import { animatePageOut } from './animations';

export default function TransitionLink({
  href,
  label,
}: {
  href: string,
  label: string,
}) {
  const router = useRouter();

  const handleClick = () => {
    animatePageOut(href, router);
  };

  return <button onClick={handleClick}>{label}</button>;
}
