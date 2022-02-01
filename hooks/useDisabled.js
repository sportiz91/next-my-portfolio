import { useState } from "react";

const useDisabled = () => {
  const [disabled, setDisabled] = useState(false);

  const prohibit = () => {
    setDisabled(true);

    setTimeout(() => {
      setDisabled(false);
    }, 1650); //Why 1.65s ? -> Because we have to consider all the transition delays of the elements.
  };

  return [disabled, prohibit];
};

export default useDisabled;
