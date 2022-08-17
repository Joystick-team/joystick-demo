import {React, useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import detectEthereumProvider from "@metamask/detect-provider"
import ModalEffect from "../Modal"


      
export default function ConnectButton(props) {
  const [isLoading, setLoading] = useState(false);
  const [currentAccount, setCurrentAccount] = useState("")
  const [chainId, setChainId] = useState("")

  const [isOpen, setIsOpen] = useState(false)
 
    function openModal() {
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
    console.log(chainId)
       setChainId(chainId )

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
   const handleClick = async() => { 
     setLoading(true);
     try{
    
      //const accounts = await window.ethereum.request({method: 'eth_requestAccounts'  })
        //console.log(accounts[0])
       // setCurrentAccount(accounts[0])
       setCurrentAccount("ghk")
      }catch(error){
        if(error.code === 4001) {
           // EIP-1193 userRejectedRequest error
           // If this happens, the user rejected the connection request.
           console.log('metamask did not connect');
         } else {
           console.error(error);
        }
    }
    console.log(currentAccount.length)

  if(currentAccount.length !== 3){
    console.log(currentAccount.length)
    if(chainId !=="0x7"){
      try {
          await window.ethereum.request({
            method: 'wallet_switchEthereumChain',
            params: [{ chainId: '0x785b4b9847b9' }],
          });
          } catch (switchError) {
          // This error code indicates that the chain has not been added to MetaMask.

          if (switchError.code === 4902) {
                  openModal()
                } 
          }
     }
  }else{
    throw Error("Please connect with metamask")
  }
   
}

const AddSkaleChain = async() =>{
  try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [
          {
            chainId: '0x785b4b9847b9',
            chainName: 'Skale Testnet',
            nativeCurrency: {
              name: "sFuel",
              symbol: "sFuel", // 2-6 characters long
              decimals: 18
            },
            rpcUrls: ["https://testnet-proxy.skalenodes.com/v1/whispering-turais"] ,
            blockExplorerUrls:["https://whispering-turais.testnet-explorer.skalenodes.com"]
          },
        ],
      });
    } catch (addError) {
      // handle "add" error
      console.log(addError)
    }
   }

   console.log(currentAccount,currentAccount.length,"accccc>>>")

    return (
    <>
    <Button
        variant={props.color}
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        className={props.className}
    >
        {isLoading ? 'Loading…' : (currentAccount.length === 0 ? props.title : currentAccount.slice(0,9)+"...")}
    </Button>
    <ModalEffect show={isOpen} closeModal={closeModal} >
        <div className="">
             Enable Joystick to add Skale chain to metamask.
             <button onClick={AddSkaleChain}>Enable</button>
        </div>
    </ModalEffect>
     </>
    );

}
