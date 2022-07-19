import clsx from "clsx";

export default function Heading({ level, filename }) {
  return (
    <div
      className={clsx("p-2 font-mono", {
        "bg-indigo-300": level === 0 && filename.startsWith("/app"),
        "bg-indigo-200": level === 1 && filename.startsWith("/app"),
        "bg-indigo-100": level === 2 && filename.startsWith("/app"),
        "bg-teal-300": level === 0 && filename.startsWith("/pages"),
        "bg-teal-200": level === 1 && filename.startsWith("/pages"),
        "bg-teal-100": level === 2 && filename.startsWith("/pages"),
      })}
    >
      {filename}
    </div>
  );
}
