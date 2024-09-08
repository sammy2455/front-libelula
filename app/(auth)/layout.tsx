import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Libelula Movies",
  description: "Las mejores películas",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
      <div className="relative bg-[url('../img/wp10615910.jpg')] bg-cover">
        {children}
      </div>
  );
}
