/*
  useClick() custom hook.
  ---
  Click state variable get's incremented by +1 everytime we make a click.
  Initial state = 0.
*/
import { useState } from "react";

const useClick = () => {
  const [click, setClick] = useState(0);

  const increment = () => {
    setClick(click + 1);
  };

  return [click, increment];
};

export default useClick;
