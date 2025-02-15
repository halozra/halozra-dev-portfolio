import Head from 'next/head';
import '../app/globals.css'

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        {/* SEO Meta Tags */}
        <meta name="description" content="Haloerza - Developer Portfolio showcasing React, Node.js, and Web Development projects." />
        <meta name="keywords" content="developer portfolio, React, Node.js, web development, Haloerza" />
        <meta name="author" content="Haloerza" />
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph Meta Tags (for social media sharing) */}
        <meta property="og:title" content="Haloerza - Developer Portfolio" />
        <meta property="og:description" content="Explore the projects and work of Haloerza, a web developer specializing in React and Node.js." />
        <meta property="og:image" content="/images/Work-Samples.png" />
        <meta property="og:url" content="https://haloezra.xyz" />
        <meta property="og:type" content="website" />
        
        {/* Twitter Cards (for Twitter sharing) */}
        <meta name="twitter:title" content="Haloerza - Developer Portfolio" />
        <meta name="twitter:description" content="Explore the projects and work of Haloerza, a web developer specializing in React and Node.js." />
        <meta name="twitter:image" content="/images/Work-Samples.png" />
        <meta name="twitter:card" content="/images/Work-Samples.png" />
        
        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        
        {/* Page Title */}
        <title>Haloerza - Developer Portfolio</title>
      </Head>
      <body className="root h-screen w-full bg-black">
        {children}
      </body>
    </html>
  );
}
