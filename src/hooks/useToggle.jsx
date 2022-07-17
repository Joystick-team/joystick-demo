import { useState, useCallback } from "react";

const useToggle = () => {
    const [toggle, setToggle] = useState(false)

    // const handleToggle = useCallback(() => setValue((value) => !value), [ ])
    const handleToggle = useCallback(() => setToggle((off) => !off), []);

    console.log('console ==>', toggle);
  return [toggle, handleToggle];
  
}

export default useToggle;