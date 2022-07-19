import Link from "next/link";
import clsx from "clsx";

const pages = ["/app", "/app/dashboard", "/app/account", "/pages"];

export default function Links() {
  return (
    <div className="font-mono text-sm border border-gray-500 mt-4 max-w-md mx-auto bg-white">
      <div className="p-2">Links</div>
      {pages.map((href) => (
        <div
          key={href}
          className={clsx("flex justify-between px-2 py-1", {
            "bg-teal-200 hover:bg-teal-100": href.startsWith("/pages"),
            "bg-indigo-200 hover:bg-indigo-100": href.startsWith("/app"),
          })}
        >
          <div>
            <span
              className={clsx(
                "mr-1 text-white font-bold rounded-full p-1 text-xs",
                {
                  "bg-teal-500": href.startsWith("/pages"),
                  "bg-indigo-500": href.startsWith("/app"),
                }
              )}
            >
              {href.startsWith("/pages") ? "P" : "A"}
            </span>
            {href}
          </div>
          <div>
            <Link href={href}>
              <a className="mr-4 hover:text-gray-600">Link</a>
            </Link>
            <a href={href} className="hover:text-gray-600">
              Anchor
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
