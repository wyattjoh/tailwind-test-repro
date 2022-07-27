import Link from "next/link";
import clsx from "clsx";

const pages = [
  "/another",
  "/app",
  "/app/dashboard",
  "/app/dashboard/team/vercel",
  "/app/account",
  "/pages",
  "/pages/get-static-props",
  "/pages/get-static-props/with-revalidate",
  "/pages/get-server-side-props",
];

export default function Links() {
  return (
    <div className="font-mono text-sm border border-gray-500 mt-4 max-w-lg mx-auto bg-white">
      <div className="p-2">Links</div>
      {pages.map((href) => {
        const isPage = href.startsWith("/pages");
        const isApp = !isPage;

        return (
          <div
            key={href}
            className={clsx("flex justify-between", {
              "bg-teal-200 hover:bg-teal-100": isPage,
              "bg-indigo-200 hover:bg-indigo-100": isApp,
            })}
          >
            <div className="px-2 py-1">
              <span
                className={clsx(
                  "mr-1 text-white font-bold rounded-full p-1 text-xs",
                  {
                    "bg-teal-500": isPage,
                    "bg-indigo-500": isApp,
                  }
                )}
              >
                {isPage ? "P" : "A"}
              </span>
              {href}
            </div>
            <div>
              <Link href={href}>
                <a
                  className={clsx("mr-2 py-1 px-2 inline-block", {
                    "bg-teal-300 hover:bg-teal-400": isPage,
                    "bg-indigo-300 hover:bg-indigo-400": isApp,
                  })}
                >
                  Link
                </a>
              </Link>
              <a
                href={href}
                className={clsx("py-1 px-2 inline-block", {
                  "bg-teal-300 hover:bg-teal-400": isPage,
                  "bg-indigo-300 hover:bg-indigo-400": isApp,
                })}
              >
                Anchor
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}
