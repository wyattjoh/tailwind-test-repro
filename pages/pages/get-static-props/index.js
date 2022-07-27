import Heading from "../../../components/Heading";
import Links from "../../../components/Links";

export default function WithoutRevalidatePage() {
  return (
    <div className="bg-teal-200">
      <Heading level={0} filename="/pages/pages/get-static-props/index.js" />
      <Links />
    </div>
  );
}

export function getStaticProps() {
  return { props: {} };
}
