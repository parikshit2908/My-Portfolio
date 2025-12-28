import { useEffect, useState } from "react";

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => {
      setIsMobile(
        window.matchMedia("(pointer: coarse)").matches ||
        /Android|iPhone|iPad/i.test(navigator.userAgent)
      );
    };
    check();
  }, []);

  return isMobile;
}
