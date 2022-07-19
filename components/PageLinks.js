import Link from "next/link";

export default function PageLinks({ href }) {
  return (
    <div>
      <div>
        <Link href={href}>
          <a>
            {"<Link />"} to {href}
          </a>
        </Link>
      </div>
      <div>
        <a href={href}>
          {"<a />"} to {href}
        </a>
      </div>
    </div>
  );
}
