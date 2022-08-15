import jskToken from '../assets/images/jskToken.png'
import bnbToken from '../assets/images/bnbToken.png'
import ethToken from '../assets/images/EthToken.png'
// import btcToken from '../assets/images/btcToken.png'

const transactions =[
    {
      token:"BTC",
      amount:"0.009",
      date:"16:00,12 dec 2022",
      address:"0xf3hfhhduu4838fvasdjfjk",
      tx:"sent"
  },
  {
    token:"JSK",
    amount:"55,324",
    date:"16:00,12 dec 2022",
    address:"0xf3hfhhduu4838fvasdjfjk",
    tx:"received"
  },
  {
    token:"BTC",
    amount:"0.3",
    date:"16:00,12 dec 2022",
    address:"0xf3hfhhduu4838fvasdjfjk",
    tx:"sent"
  },
  {
    token:"BNB",
    amount:"0.5",
    date:"16:00,12 dec 2022",
    address:"0xf3hfhhduu4838fvasdjfjk",
    tx:"sent"
  },
  {
    token:"BNB",
    amount:"0.5",
    date:"16:00,12 dec 2022",
    address:"0xf3hfhhduu4838fvasdjfjk",
    tx:"sent"
  },
]
  
const tokens = [
  
    {
      title:"Ethereum",
      symbol:"ETH",
      logo: ethToken,
   
    },
  
    {
      title:"Binance Coin",
      symbol:"BNB",
      logo:bnbToken,
     
    },
  
    {
      title:"Joystick Token",
      symbol:"JSK",
      logo:jskToken,
     
    },
  
]
  
const tokenStats=[
  {
    token:"Bitcoin",
    stats:"81%",
    img:""
  },
  {
    token:"Ethereum",
    stats:"12%",
    img:""
  },
  
  {
    token:"Joystick",
    stats:"7%",
    img:""
  
  }
]

export default transactions;
export {tokens, tokenStats};