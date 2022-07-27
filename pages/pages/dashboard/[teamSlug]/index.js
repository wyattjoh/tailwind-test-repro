import Heading from "../../../../components/Heading";
import Links from "../../../../components/Links";

export default function WithoutRevalidatePage() {
  return (
    <div className="bg-teal-200">
      <Heading
        level={0}
        filename="/pages/pages/dashboard/[teamSlug]/index.js"
      />
      <Links />
    </div>
  );
}

export function getStaticPaths() {
  return { paths: [], fallback: "blocking" };
}

export function getStaticProps() {
  return { props: {} };
}
