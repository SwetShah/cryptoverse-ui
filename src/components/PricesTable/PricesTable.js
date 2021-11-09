import './PricesTable.css';

function PricesTable({ rows }) {
    let table = (<></>);
    if (Array.isArray(rows) && rows.length) {
        table = (<div className="PricesTable">
            <table id="priceTable">
                <thead>
                    <tr>
                        <td>
                            Exchange
                        </td>
                        <td>
                            Coin Name
                        </td>
                        <td>
                            Coin Symbol
                        </td>
                        <td>
                            Buy Price
                        </td>
                        <td>
                            Sell Price
                        </td><td>
                            Currency
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {row.key}
                                </td>
                                <td>
                                    {row.name}
                                </td>
                                <td>
                                    {row.symbol}
                                </td>
                                <td>
                                    {row.buyPrice}
                                </td>
                                <td>
                                    {row.sellPrice}
                                </td>
                                <td>
                                    {row.currency}
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>)
    }

    return table

}

export default PricesTable;
