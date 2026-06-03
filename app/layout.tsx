import './reset.css';
import './globals.css';
import ContentContainer from './_lib/ContentContainer';
import GlobalNavigation from './_lib/GlobalNavigation';
import { Urbanist } from 'next/font/google'

const urbanist = Urbanist()

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.className}>
    <head>
      <title>Rory Devane</title>
    </head>
    <body>
    <ContentContainer>
      <GlobalNavigation />
      {children}
    </ContentContainer>
    </body>
    </html>
  );
}
