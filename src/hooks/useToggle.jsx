import { useState, useCallback } from "react";

const useToggle = () => {
    const [toggle, setToggle] = useState(false)

    const handleToggle = useCallback(() => setToggle((value) => !value), [ ])
  return [toggle, handleToggle];
  
}

export default useToggle;