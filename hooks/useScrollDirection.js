const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

import { useState, useEffect } from "react";

const useScrollDirection = (initialDirection) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;
    // console.log(lastScrollY);

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;
      // console.log(`scrollY: ${scrollY}`);

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
      // console.log(`lastScrollY: ${lastScrollY}`);
    };

    const onScroll = () => {
      updateScrollDir();
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return scrollDir;
};

export default useScrollDirection;
