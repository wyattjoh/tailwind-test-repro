import Heading from "../../../components/Heading";
import Links from "../../../components/Links";

export default function WithRevalidatePage() {
  return (
    <div className="bg-teal-200">
      <Heading
        level={0}
        filename="/pages/pages/get-static-props/with-revalidate.js"
      />
      <Links />
    </div>
  );
}

export function getStaticProps() {
  return { props: {}, revalidate: 60 };
}
