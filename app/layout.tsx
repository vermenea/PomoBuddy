import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import './style/globals.css';
import { VT323, Oswald } from 'next/font/google';
import SessionProvider from './SessionProvider';
import Login from './Login';
import Home from './page';

const vt323 = VT323({
  weight: ['400'],
  subsets: ['latin'],
});

const oswald = Oswald({
  weight: ['400', '500', '700'],
  subsets: ['latin'],
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(authOptions);
  return (
    <html lang='en'>
      <body className={`${vt323.className} ${oswald.className}`}>
        <SessionProvider session={session}>
          {!session ? <Login /> : <Home />}
        </SessionProvider>
      </body>
    </html>
  );
}
