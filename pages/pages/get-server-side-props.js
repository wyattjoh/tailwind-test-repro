import Heading from "../../components/Heading";
import Links from "../../components/Links";

export default function GetServerSidePropsPage() {
  return (
    <div className="bg-teal-200">
      <Heading level={0} filename="/pages/pages/get-server-side-props.js" />
      <Links />
    </div>
  );
}

export function getServerSideProps() {
  return { props: {} };
}
