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
      </head>
      <body>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
