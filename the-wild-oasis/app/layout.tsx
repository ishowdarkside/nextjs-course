import Logo from "./components/Logo";
import Navigation from "./components/Navigation";

export const metadata = {
  title: "The wild Oasis",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element {
  return (
    <html lang="en">
      <body>
        <header>
          <Logo />
        </header>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
