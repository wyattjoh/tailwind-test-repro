import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-red-400">{children}</body>
    </html>
  );
}
