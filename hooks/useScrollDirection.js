/*
  useScrollDirection() custom hook.
  ---
  On page load adds an scroll window event listener that executes onScroll function (which instead
  executes updateScrollDir function) every time we have a window scroll.
  Every time we scroll, scrollY gets compared with lastScrollY. If it's greater, then we are scrolling down
  if it's lesser, then we are scrolling up.
*/

const SCROLL_UP = "up";
const SCROLL_DOWN = "down";

import { useState, useEffect } from "react";

const useScrollDirection = (initialDirection) => {
  const [scrollDir, setScrollDir] = useState(initialDirection);

  useEffect(() => {
    let lastScrollY = window.pageYOffset; // initial value on page load = 0. == window.scrollY.

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset;

      setScrollDir(scrollY > lastScrollY ? SCROLL_DOWN : SCROLL_UP);
      lastScrollY = scrollY > 0 ? scrollY : 0;
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
