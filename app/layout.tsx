import type { Metadata } from "next";
import "./globals.css";
import Providers from "@/components/Providers";

export const metadata: Metadata = {
  title: "Libelula Movies",
  description: "Las mejores películas",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="es">
      <body className="min-h-screen bg-background text-primary-foreground">
        <Providers>
            {children}
        </Providers>
      </body>
    </html>
  );
}
