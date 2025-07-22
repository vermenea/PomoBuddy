'use client';

import { Props } from '@/types/types';
import { SessionProvider as Provider } from 'next-auth/react';


export default function SessionProvider({children}: Props) {
  return (
    <Provider>
      {children}
    </Provider>
  )
}
