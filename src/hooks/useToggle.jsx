import { useState, useCallback } from "react";

const useToggle = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = useCallback(() => setToggle((value) => !value), [ ])
    // const handleToggle = useCallback(() => setToggle(true), [])

    console.log('console ==>', toggle);
  return [toggle, handleToggle];
  
}

export default useToggle;