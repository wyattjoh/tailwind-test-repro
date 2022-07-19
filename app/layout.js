import Heading from "../components/Heading";

import "../styles/globals.css";

export default function RootLayout({ children }) {
  return (
    <html>
      <head />
      <body className="bg-indigo-400">
        <Heading level={0} filename="/app/layout.js" />
        <main>{children}</main>
      </body>
    </html>
  );
}
