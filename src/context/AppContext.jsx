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
const [isUser, setIsUser] = useState(false)
const [message, setMessage] = useState()
const [success, setSuccess] = useState(true)
const [isSubscriber, setIsSubscriber] = useState(true)

  return (
    <AppContext.Provider value={{
        mobileDrawer, 
        setMobileDrawer,
        regModal, 
        setRegModal,
        signUp,
        setSignUp,
        isUser,
        setIsUser,
        message, 
        setMessage,
        success, 
        setSuccess,
        isSubscriber, 
        setIsSubscriber
    }} >
        {children}
    </AppContext.Provider>
   
  )
}
