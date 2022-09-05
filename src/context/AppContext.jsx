import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();


export const AppContextInit = () => {
 return useContext(AppContext)
}
export default function AppContextContainer({children}) {
const [mobileDrawer, setMobileDrawer] = useState(false);
const [regModal, setRegModal] = useState()
const [signUp, setSignUp] = useState(false)
  return (
    <AppContext.Provider value={{
        mobileDrawer, 
        setMobileDrawer,
        regModal, 
        setRegModal,
        signUp,
        setSignUp
    }} >
        {children}
    </AppContext.Provider>
   
  )
}
