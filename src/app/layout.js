import Providers from './provider';
import './globals.css'
export const metadata = {
  title: 'MrSatya',
  description: 'A Portfollio of Er.Satyam Malviya',
  icons: {
    icon: "/meetme.png"
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="/dist/styles.css" rel="stylesheet"></link>
        <meta name="google-site-verification" content="bOFwGx2Eb0Qf1rni0VePuUqjoW0WNVE5PsLRmhykFQo" />
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
