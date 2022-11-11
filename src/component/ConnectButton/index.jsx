import {React, useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import detectEthereumProvider from "@metamask/detect-provider"
import ModalEffect from "../Modal"
import { useCallback } from 'react';


      
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

const web3loader = useCallback(
  async() => {

    const webProvider = await detectEthereumProvider();

    // console.log(webProvider)
        if(webProvider){
          const chainId = await window.ethereum?.request({ method: 'eth_chainId' });
      // console.log(chainId)
        setChainId(chainId )

    const accounts = await window.ethereum?.request({ method: 'eth_accounts' })
        handleAccountsChanged(accounts)
      }
  }
  , [])
    
   useEffect(()=>{
    window.addEventListener('load', web3loader)
    window.ethereum?.on('accountsChanged', handleAccountsChanged);

    return () => {
      web3loader()
    }
    },[web3loader])

   function handleAccountsChanged(accounts) {
     //window.location.reload();
    }
   const handleClick = async() => { 
     setLoading(true);
     try{
    
      const accounts = await window.ethereum?.request({method: 'eth_requestAccounts'  })
        // console.log(accounts[0])
        setCurrentAccount(accounts[0])
      
      }catch(error){
        if(error.code === 4001) {
           // EIP-1193 userRejectedRequest error
           // If this happens, the user rejected the connection request.
          //  console.log('metamask did not connect');
         } else {
           console.error(error);
        }
    }
    // console.log(currentAccount.length)

 
    // console.log(currentAccount.length)
    if(chainId !=="0x7"){
      try {
          await window.ethereum?.request({
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
 
   
}

const AddSkaleChain = async() =>{
  try {
      await window.ethereum?.request({
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
        throw Error(addError)
      }
    }

  //  console.log(currentAccount,currentAccount.length,"accccc>>>")

    const skaleChain = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '200px',
        padding: '20px',
        fontSize: '18px',
        lineHeight: '3',
    }

    const skaleChainBtn = {
      height: '50px',
      // padding: '20px',
      width: '100%',
      display: 'flex',
      color: 'white',
      background: 'red',
      border: 'transparent',
      outline: 'transparent',
      alignItems: 'center',
      justifyContent: 'center',
      transition : 'all 500ms ease-out'
    }

    const skaleChainBtnContainer = {
      height: '50px',
      width: '100%',
      display: 'block',
    }

    return (
    <>
    <Button
        variant={props.color}
        disabled={isLoading}
        onClick={!isLoading ? handleClick : null}
        className={props.className}
        style={props.style}
    >
        {isLoading ? 'Loading…' : (currentAccount.length === 0 ? props.title : currentAccount.slice(0,9)+"...")}
    </Button>
    <ModalEffect show={isOpen} closeModal={closeModal} >
        <div className="stake__container" style={skaleChain}>
          <div className="stake__holder">
              Enable Joystick to add Skale chain to metamask.
              <div className="stakebtn" style={skaleChainBtnContainer}>
                <button onClick={AddSkaleChain} style={skaleChainBtn} >Enable</button>
              </div>
          </div>
        </div>
    </ModalEffect>
     </>
    );

}
