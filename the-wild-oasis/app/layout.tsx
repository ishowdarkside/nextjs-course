import Header from "./_components/Header";
import Logo from "./_components/Logo";
import Navigation from "./_components/Navigation";
import "@/app/_styles/globals.css";

import { Josefin_Sans } from "next/font/google";
const josefin = Josefin_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  //title: "The wild Oasis",
  title: {
    template: "%s - The Wild Oasis",
    default: "Welcome / The Wild Oasis",
  },

  description:
    "Luxurious cabin hotel, located in the heart of the Italian Dolomites, surrounded by beautiful mountains and dark forests",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body
        className={` antialiased text-primary-100 min-h-screen bg-primary-950 ${josefin.className} flex flex-col `}
      >
        <Header />

        <div className="flex-1 px-8 py-12   grid">
          <main className="max-w-7xl mx-auto w-full">{children}</main>
        </div>
      </body>
    </html>
  );
}
