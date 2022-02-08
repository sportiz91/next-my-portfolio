import { useState, useEffect } from "react";

const useIdle = ({ timeout, onIdle }) => {
  const [state, setState] = useState(Object.create(null));

  useEffect(() => {
    const t = setTimeout(onIdle, timeout);
    return () => clearTimeout(t);
  }, [onIdle, timeout, state]);

  const touch = () => {
    setState(Object.create(null));
  };

  return touch;
};

export default useIdle;
