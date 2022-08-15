import React,{useState} from 'react'
import "./wallet.scss"
import {GoKebabVertical} from "react-icons/go"
import {TiArrowLeft,TiArrowRight} from "react-icons/ti"
import transactions, {tokens, tokenStats} from '../../Store/walletStorage'
import btcToken from '../../assets/images/btcToken.png'

export default function Wallet() {
   const [transactionState,setTxState]=useState("All")

  const Transactions= transactions.map((transaction)=>{
     return(
         <>
            {(transactionState==="All")&&(
                <div className='tx-card'>
                  <main className='tx-card-top'>
                    <h5 className='tx-date'>{transaction.date}</h5>
                    <h5>{transaction.tx==="sent"?(<TiArrowRight style={{color:"green"}} />):(<TiArrowLeft style={{color:"red"}}/>)}<span className='tx-amt-token'>{transaction.amount} {transaction.token}</span></h5>
                  </main>
                  <h5 className='tx-address'>
                    {transaction.address}
                  </h5>
                </div>
            )
            
            }
          
        
         {(transactionState==="Send")&&(
          <div>

          </div>
         )
         }
          {(transactionState==="Recent")&&(
              <div>

              </div>
          )
            }
           
       </>
         
     )
  })


   const OtherTokenCards= tokens.map((token)=>{
      
         return(
          <div className='othertoken-card'>
          <main className='othertoken-top'>
            <h5 ><span className='token-symbol'>{token.symbol}</span></h5>
          <div className='token-img-container'> <img src={token.logo} alt='logo' className='token-img'/></div>
          </main>
          <main  className='othertoken-bottom'>
            <h5>{token.title}</h5>
          </main>

        </div>
         )
})

const TokenStats= tokenStats.map((token)=>{
      
  return(
   <div className='token-stat'>
     <main className='stats'>
       <div> <img src={token.img} alt="logo"/></div>
        <h5 >{token.stats}</h5>
     </main>
     <main className='options'>
       <h5>{token.token}</h5>
       <h5> <GoKebabVertical /></h5>
     </main>
    
  </div>
  )
})
  return (


    <div className="wallet">
      
      <h4> My Wallets</h4> 
         
          <div className='wallet-container'>
      
            
            <div className='main-wallet-div'>
                <div className='crypto-cards-div'>
                   <div className='btc-card'>
                     <main className='btc-top'>
                       <h5 ><span className='btc-symbol'>BTC</span></h5>
                       <div className='btc-img-container'>
                       <img src={btcToken} alt='btc-logo' className='btc-img'/>
                       </div>
                      
                     </main>
                     <main  className='btc-bottom'>
                        <h5 className='btc-name'>Bitcoin</h5>
                        <h5 className='btc-balance'>0.2217346</h5>
                     </main>

                   </div>
                   {OtherTokenCards}
                </div>

                <div className='wallet-transaction'>
                  <div className='token-stats-div'>
                    { TokenStats}
                  </div>
                 <div className='wallet-tx-div'>
                    <main className='tx-top'>
                      <div className='wallet-select'>
                        <h5>WALLET</h5>
                        <input 
                         className='token-select'
                        />
                      </div>
                      <div  className="amt-input">
                        <h5>AMOUNT</h5>
                         <input 
                         type="text"
                          className='amt-field'
                         />
                      </div>
                    </main>
                    <main className='tx-mid'>
                      <h5>Send To</h5>
                       <input 
                          className='transfer-field'
                       />
                    </main>
                    <main className='tx-bottom'>
                      <h5>Receive {"Bitcoin"}</h5>
                      <button className='send-btn'><span>send</span></button>
                    </main>
                 </div>

                </div>
            </div>
           
            <div className='transaction-details'>
              <div className='transaction-main-div'>
              <div className='transaction-tags'>
                 <h5>Transactions</h5>
                  <main className='filter-tags'>
                     <h5 onClick={()=>setTxState("All")}>ALL</h5>
                     <h5 onClick={()=>setTxState("Send")}>SEND</h5>
                     <h5 onClick={()=>setTxState("Recent")}>RECENT</h5>
                  </main>
              </div>
             <div className='transaction-cards'>
                {Transactions}
             </div>

            </div>

            </div>

      
        </div>
   
          
       
    </div> 
    
  )
}