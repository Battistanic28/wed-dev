/* eslint-disable no-unused-vars */
import { VisibilityOff, Visibility } from '@mui/icons-material';
import {
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  IconButton,
  Button,
} from '@mui/material';
import { useState, MouseEvent, ChangeEvent, FormEvent } from 'react';

interface PasswordFormProps {
  setIsAuthorized: (isAuthorized: boolean) => void;
  setIsPasswordErrored: (isPassowordErrored: boolean) => void;
}

const PasswordForm = ({
  setIsAuthorized,
  setIsPasswordErrored,
}: PasswordFormProps) => {
  const topSecret = process.env.NEXT_PUBLIC_APP_PASSWORD;
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState('');
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const checkPassword = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (password === topSecret) {
      setIsAuthorized(true);
      localStorage.setItem('secret', password);
    } else {
      setIsPasswordErrored(true);
      setIsAuthorized(false);
    }
  };

  return (
    <form onSubmit={checkPassword}>
      <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
        <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
        <OutlinedInput
          id="outlined-adornment-password"
          type={showPassword ? 'text' : 'password'}
          onChange={handlePasswordChange}
          endAdornment={
            <InputAdornment position="end">
              <IconButton
                aria-label="toggle password visibility"
                onClick={handleClickShowPassword}
                onMouseDown={handleMouseDownPassword}
                edge="end"
              >
                {showPassword ? <VisibilityOff /> : <Visibility />}
              </IconButton>
            </InputAdornment>
          }
          label="Password"
        />
      </FormControl>
      <Button type="submit">Check</Button>
    </form>
  );
};

export default PasswordForm;
