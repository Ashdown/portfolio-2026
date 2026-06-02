import './reset.css';

export default function RootLayout({
                                     children,
                                   }: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
    <head>
      <title>Rory Devane</title>
    </head>
    <body>
    <ul>
      <li>
        <a href="#about-me-section">About Me</a>
      </li>
      <li>
        <a href="#links-section">Links</a>
      </li>
    </ul>
    {children}
    </body>
    </html>
  );
}
