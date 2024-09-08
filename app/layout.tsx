import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Libelula Movies",
  description: "Las mejores películas",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="">
        {children}
      </body>
    </html>
  );
}
