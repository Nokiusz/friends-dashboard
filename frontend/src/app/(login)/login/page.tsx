'use client';

import React from 'react';
import { Button } from 'antd';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

const URL = 'http://localhost:3001/api/auth/discord';

const Login = () => {
  const { push } = useRouter();

  const handleLogin = () => {
    push(URL);
  };

  return (
    <div>
      <Button
        type='dashed'
        className='login-button'
        icon={
          <Image
            priority
            src={'discord.svg'}
            width={16}
            height={16}
            alt='Login with Discord'
          />
        }
        onClick={handleLogin}
      >
        Login with discord
      </Button>
    </div>
  );
};

export default Login;
