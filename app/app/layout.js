import Heading from "../../components/Heading";

export default function AppLayout({ children }) {
  return (
    <div>
      <Heading level={1} filename="/app/app/layout.js" />
      <div>{children}</div>
    </div>
  );
}
