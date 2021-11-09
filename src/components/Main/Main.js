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
  const [priceRows, setPriceRows] = useState([]);
  const [recommendationRows, setRecommendationRows] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
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
    setIsLoading(true);
    api.post('/price', {
      coins,
      exchanges,
      currencies
    }).then(response => {
      const { data } = response;
      // console.log(data);
      const keys = Object.keys(data);
      const result = keys.reduce((acc, key, index) => {
        const item = data[key];
        const values = Object.values(item.coinMap);
        if (Array.isArray(values) && values.length) {
          const newCoinMap = values.map(cm => {
            return {
              key,
              ...cm
            }
          })
          acc.push(...newCoinMap);
        }
        return acc;
      }, []);
      // console.log(result)
      setPriceRows(result);
    }).finally(() => {
      setIsLoading(false);
    })
  }


  const getRecommendations = () => {
    console.log(coins, exchanges, currencies);
    setIsLoading(true);
    api.post('/recommendations', {
      coins,
      exchanges,
      currencies
    }).then(response => {
      const { data } = response;
      // console.log(data);
      const rows = data.map(item => {
        const row = {
          'coinName': item.coin.name,
          'coinSymbol': item.coin.symbol,
          'exchange': item.exchange.name,
          'activity': item.activity,
          'link': item.exchange.link,
          'price': ''
        }
        if (item.activity === 'Buy') {
          row.price = item.coin.buyPrice
        } else if (item.activity === 'Sell') {
          row.price = item.coin.sellPrice;
        }
        return row
      });
      console.log(rows);
      setRecommendationRows(rows);
    }).finally(() => {
      setIsLoading(false)
    });
  }
  return (
    <div className="Main">
      <div className="row">
        <MultiSelect type="coins" options={coinOptions} onChange={(values) => onOptionChange('coins', values)}></MultiSelect>
        <MultiSelect type="exchange" options={exchangeOptions} onChange={(values) => onOptionChange('exchange', values)}></MultiSelect>
        <MultiSelect type="currency" options={currencyOptions} onChange={(values) => onOptionChange('currency', values)}></MultiSelect>
      </div>
      <div className="buttons">
        <ButtonComponent className="button" onClick={getPrices}>Get Prices</ButtonComponent>
        <ButtonComponent className="button" onClick={getRecommendations}>Get Recommendations</ButtonComponent>
        {isLoading ? <div>Loading....</div> : null}
      </div>
      <div className="table">
        <PricesTable rows={priceRows}>
        </PricesTable>
        <div className="spacer">
        </div>
        <RecommendationsTable rows={recommendationRows}>
        </RecommendationsTable>
        <div className="spacer">
        </div>
      </div>
    </div>
  );
}

export default App;
