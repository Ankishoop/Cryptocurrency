import React,{useEffect,useState} from 'react';
import Coin from './Coin';
import axios from 'axios';
import './App.css';

// https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false
function App() {
  
  const [coin, setcoin] = useState([]);
  const [search, setsearch] = useState("");


  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=200&page=1&sparkline=false')
    .then(res =>{
      setcoin(res.data);
      
    }).catch(error => console.log(error))
  })


  const handelchange =(event)=>
  {
    setsearch(event.target.value);
  }

  const filtercoin = coin.filter(coin=>
     coin.name.toLowerCase().includes(search.toLowerCase())
  )


  return (
    <>
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text">Search For Crypto Currency</h1>
        <form>
          <input className='search-bar' type="text" placeholder="Search...." onChange={handelchange}/>
        </form>
      </div>
      
      {filtercoin.map(coin=>
        {return(
          <Coin key={coin.id} 
          name={coin.name} 
          image={coin.image}
          symbol={coin.symbol}
          volume={coin.market_cap}
          price={coin.current_price}
          rank={coin.market_cap_rank}
          price_change_persent={coin.price_change_percentage_24h}
          />
        )

        })}
    </div>
    </>
  );
}

export default App;
