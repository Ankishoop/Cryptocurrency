import React from 'react';
import './Coin.css'

const Coin = ({rank,image,name,symbol,price,volume,price_change_persent}) => {
    return (
        <div className="coin-container">


            <div className="coin-row">
                <ul className='coin-rank'>
                    <li>{rank}</li>
                </ul>
                <img className='coin-image' src={image} alt='error'/>
                <h1 className='coin-name'>{name}</h1>
                <p className="coin-symbol" >{symbol.toUpperCase()}</p>
            </div>


            <div className="coin-data">
                <p className="coin-price">${price}</p>
                <p className="coin-price">${volume.toLocaleString()}</p>
                {
                    price_change_persent<0 ?(
                        <p className='coin-persent red'>{price_change_persent.toFixed(2)}%</p> 
                    ):(
                        <p className='coin-persent green'>{price_change_persent.toFixed(2)}%</p> 
                    )
                }
            </div>


        </div>
    )
}

export default Coin;
