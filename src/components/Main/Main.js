import { Button } from '@syncfusion/ej2-buttons';
import { useState } from 'react';
import { coins as coinOptions } from '../../api/coins';
import { currency as currencyOptions } from '../../api/currency';
import { exchange as exchangeOptions } from '../../api/exchange';
import MultiSelect from '../MultiSelect/MultiSelect';
import './Main.css';
import { ButtonComponent } from '@syncfusion/ej2-react-buttons';
import api from '../../api/api';
import PricesTable from '../PricesTable/PricesTable';
import RecommendationsTable from '../RecommendationsTable/RecommendationsTable';

function App() {
  const [coins, setCoins] = useState([]);
  const [exchanges, setExchanges] = useState([]);
  const [currencies, setCurrencies] = useState([]);

  const onOptionChange = (type, values) => {
    if (type === 'coins') {
      setCoins(values);
    } else if (type === 'exchange') {
      setExchanges(values);
    } else if (type === 'currency') {
      setCurrencies(values);
    }
  }

  const getPrices = () => {
    console.log(coins, exchanges, currencies);
    api.post('/price', {
      coins,
      exchanges,
      currencies
    });
  }

  const getRecommendations = () => {
    console.log(coins, exchanges, currencies);
    api.post('/recommendations', {
      coins,
      exchanges,
      currencies
    });
  }
  return (
    <div className="Main">
      UI
      <div className="row">
        <MultiSelect type="coins" options={coinOptions} onChange={(values) => onOptionChange('coins', values)}></MultiSelect>
        <MultiSelect type="exchange" options={exchangeOptions} onChange={(values) => onOptionChange('exchange', values)}></MultiSelect>
        <MultiSelect type="currency" options={currencyOptions} onChange={(values) => onOptionChange('currency', values)}></MultiSelect>
      </div>
      <div className="row">
        <ButtonComponent onClick={getPrices}>Get Prices</ButtonComponent>
      </div>
      <div className="row">
        <ButtonComponent onClick={getRecommendations}>Get Recommendations</ButtonComponent>
      </div>
      <div className="table">
        <PricesTable></PricesTable>
        <RecommendationsTable></RecommendationsTable>
      </div>
    </div>
  );
}

export default App;
