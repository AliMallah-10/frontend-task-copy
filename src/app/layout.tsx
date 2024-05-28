import "./[locale]/globals.css"; // Adjust paths as necessary

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
