import { useState } from "react";

const useClick = () => {
  const [click, setClick] = useState(0);

  const increment = () => {
    setClick(click + 1);
  };

  return [click, increment];
};

export default useClick;
