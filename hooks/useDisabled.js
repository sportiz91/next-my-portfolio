/*
  useDisabled() custom hook.
  ---
  Change disabled state to true when executing prohibit function.
  Then, state reverts back to false after timeout ms (function argument).
*/

import { useState } from "react";

const useDisabled = (timeout) => {
  const [disabled, setDisabled] = useState(false);

  const prohibit = () => {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, timeout);
  };

  return [disabled, prohibit];
};

export default useDisabled;
