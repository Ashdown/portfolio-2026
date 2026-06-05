import { Analytics } from "@vercel/analytics/next"
import './reset.css';
import './globals.css';
import ContentContainer from './_lib/ContentContainer';
import GlobalNavigation from './_lib/GlobalNavigation';
import { Urbanist } from 'next/font/google'
import Footer from "./_lib/Footer";

const urbanist = Urbanist()

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={urbanist.className}>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>Rory Devane</title>
    </head>
    <body>
    <ContentContainer>
      <GlobalNavigation/>
      {children}
    </ContentContainer>
    <Footer/>
    <Analytics />
    </body>
    </html>
  );
}
