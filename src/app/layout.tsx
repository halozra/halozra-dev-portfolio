
import '../app/globals.css'
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="root h-screen w-full bg-black"
      >
        {children}
      </body>
    </html>
  );
}
