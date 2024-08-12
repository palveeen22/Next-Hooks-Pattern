import type { Metadata } from "next";
import "../public/styles/styles.css"
import { MetaData } from "../constants";
import TanstackProvider from "providers/TanstackProvider";

export const metadata: Metadata = MetaData

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <TanstackProvider>
          {children}
        </TanstackProvider>
      </body>
    </html>
  );
}
