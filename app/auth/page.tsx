'use client';

import { useState, ChangeEvent, FormEvent } from 'react';
import Cookies from 'js-cookie';

export default function PasswordPage() {
  const [password, setPassword] = useState<string>('');
  const sharedPassword = process.env.NEXT_PUBLIC_SECRET;

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (password === sharedPassword) {
      Cookies.set('password', password, { expires: 1 });
      window.location.href = '/';
    } else {
      alert('Incorrect password');
    }
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div>
      <h1>Enter Password</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          value={password}
          onChange={handlePasswordChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
