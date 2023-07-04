import React, { useState } from "react";
//component
import { CurrencyNav } from '../../components/mobile-component/currency-navbar/CurrencyNav';
import { MobileBottomNav } from '../../components/mobile-component/bottom-navbar/MobileBottomNav';
import { StrategySort } from "../../components/mobile-component/sort/StrategySort";
import { StrategyResult } from "../../components/mobile-component/result/StrategyResult";
//icon
import search from '../../assets/icon/search.svg';
//image
import us from '../../assets/images/american-flag.jpg';
import japan from '../../assets/images/japan-flag.jpg';
import strategyImg from '../../assets/images/strategy-result.jpg';

export default function MobileStrategyPage() {
  const [sortChoose, setSortChoose] = useState({
    return: false,
    multiTimeFrame: false,
    winRate: false,
    name: ''
  })
  const [currencyChoose, setCurrencyChoose] = useState({
    forex: true,
    stock: false,
    crypto: false,
    name: 'forex'
  });
  const [navChoose, setNavChoose] = useState({
    watchlist: false,
    filter: false,
    home: true,
    strategy: false,
    signal: false
  });
  const handleClick = e => {
    let id = e.currentTarget.id;
    if (id == 'forex' || id == 'stock' || id == 'crypto') {
      setCurrencyChoose({
        forex: false,
        stock: false,
        crypto: false,
        name: ''
      });
      setCurrencyChoose(prev => {
        return {
          ...prev,
          [id]: true,
          name: id
        };
      });
    } else if (id == 'watchlist' || id == 'filter'
      || id == 'home' || id == 'strategy' || id == 'signal') {
      setNavChoose({
        watchlist: false,
        filter: false,
        home: false,
        strategy: false,
        signal: false,
      });
      setNavChoose(prev => {
        return {
          ...prev,
          [id]: true
        }
      })
    } else {
      console.log(sortChoose.id);
      setSortChoose({
        ...sortChoose,
        [id]: !(sortChoose.id),
        name: [id],
      })
    }
  }

  return (
    <div className="tradino">
      <div className="mb-strategyPge-content">
        <div className="mb-strategyPge-black-part-content">
          <h1 className="mb-strategyPge-title">Strategys</h1>
          <div className="wrapper">
            <img className='mb-search-icon-strategyPge'
              aria-label="search"
              src={search} />
            <input className="mb-strategyPge-search-input" placeholder="find your symbol" type={'text'} />
          </div>
        </div>
        <div className="mb-strategyPge-gray-content">
          <CurrencyNav handleClick={handleClick} currencyChoose={currencyChoose} />
          <h4 >best strategy in {currencyChoose.name}</h4>
          <StrategySort handleClick={handleClick} sortChoose={sortChoose} />
          <StrategyResult
            bigImg={us}
            smallImg={japan}
            name={'class name1'}
            author={'john copper'}
            strategyImg={strategyImg}
            winRate={63}
            riskReward={1.63}
            returnRate={110}
            timeFrame={1} />
            <StrategyResult
            bigImg={us}
            smallImg={japan}
            name={'class name1'}
            author={'john copper'}
            strategyImg={strategyImg}
            winRate={63}
            riskReward={1.63}
            returnRate={110}
            timeFrame={1} />
            <StrategyResult
            bigImg={us}
            smallImg={japan}
            name={'class name1'}
            author={'john copper'}
            strategyImg={strategyImg}
            winRate={63}
            riskReward={1.63}
            returnRate={110}
            timeFrame={1} />
          <MobileBottomNav navChoose={navChoose} handleClick={handleClick} />
        </div>
      </div>
    </div>
  )
}