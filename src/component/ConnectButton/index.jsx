import {React, useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import detectEthereumProvider from "@metamask/detect-provider"
import ModalEffect from "../Modal"


      
export default function ConnectButton(props) {
    const [isLoading, setLoading] = useState(false);
    const [currentAccount,setAccount]=useState("")
    const [isOpen, setIsOpen] = useState(true)

    function openModal(data) {
        setIsOpen(true);
    }
      
    const closeModal = () => {
        setIsOpen(false)
    }

    function simulateNetworkRequest() {
        return new Promise((resolve) => setTimeout(resolve, 2000));
        }

    useEffect(() => {
    if (isLoading) {
        simulateNetworkRequest().then(() => {
        setLoading(false);
        });
    }
    }, [isLoading]);

    const web3loader=async() =>{
      
        const webProvider = await detectEthereumProvider();
        
         console.log(webProvider)
        if(webProvider){
          const chainId = await window.ethereum.request({ method: 'eth_chainId' });
          console.log(typeof(chainId))
        //  if(chainId !=="0x7"){
        //     try {
        //         await window.ethereum.request({
        //           method: 'wallet_switchEthereumChain',
        //           params: [{ chainId: '0x785b4b9847b9' }],
        //         });
        //       } catch (switchError) {
        //         // This error code indicates that the chain has not been added to MetaMask.
        //         if (switchError.code === 4902) {
                        
        //         }
        //     }
        //  }
    const accounts = await window.ethereum.request({ method: 'eth_accounts' })
     handleAccountsChanged(accounts)
    }
}

    useEffect(()=>{
        window.addEventListener('load',web3loader)
        window.ethereum.on('accountsChanged', handleAccountsChanged);

    },[])
     
    function handleAccountsChanged(accounts) {
        //window.location.reload();
      }
    //const handleClick = () => setLoading(true);
    const handleClick=async()=>{
        setLoading(true);
        try{
            const accounts = await window.ethereum.request({method: 'eth_requestAccounts'  })
              console.log(accounts)
              setAccount(accounts[0])
        }catch(error){
            if(error.code === 4001) {
               // EIP-1193 userRejectedRequest error
               // If this happens, the user rejected the connection request.
               console.log('Please connect to MetaMask.');
             } else {
               console.error(error);
            }
    }
}
    return (
    <>
    <Button
        variant={props.color}
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        className={props.className}
    >
        {isLoading ? 'Loading…' : (currentAccount.length===0? props.title:currentAccount.slice(0,9)+"...")}
    </Button>
    <ModalEffect show={isOpen} closeModal={closeModal} >
        <div className="">
        Bart check this out
        </div>
    </ModalEffect>
     </>
    );

}
