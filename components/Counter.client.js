import { useEffect, useRef, useState } from "react";

/**
 * Renders the number of times the component has rendered as well as
 * the time it was rendered (as a Unix time stamp).
 */
export default function Counter() {
  const [enabled, setEnabled] = useState(false);

  useEffect(() => {
    setEnabled(true);
  }, []);

  const count = useRef(0);

  if (!enabled) {
    return null;
  }

  count.current += 1;

  return (
    <div className="text-white font-bold rounded-full p-1 text-xs bg-fuchsia-500">
      {count.current} - {Date.now()}
    </div>
  );
}
