import {React, useEffect, useState} from 'react'
import {Button} from 'react-bootstrap'
import detectEthereumProvider from "@metamask/detect-provider"
import ModalEffect from "../Modal"
import { useCallback } from 'react';
// import { setupWalletSelector } from "@near-wallet-selector/core";
// import { setupModal } from "@near-wallet-selector/modal-ui";
// import { setupNearWallet } from "@near-wallet-selector/near-wallet";
import { Wallet } from '../../near-wallet';



export default function NearConnectButton(props) {
    
  const wallet = new Wallet({ createAccessKeyFor: "dev-1676201814699-75635774936062" })

  
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

  

    const handleClick=async()=>{
        setLoading(true);
      
        let isSignedIn = await wallet.startUp();

        console.log(isSignedIn,"signedin")
        wallet.signIn()
        
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
   
     </>
    );

}
