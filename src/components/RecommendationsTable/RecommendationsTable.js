import './RecommendationsTable.css';

function RecommendationsTable({ rows }) {
    let table = (<></>);
    if (Array.isArray(rows) && rows.length) {
        table = (<div className="RecommendationsTable">
            <table id="recommendationsTable">
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
                            Price
                        </td>
                        <td>
                            Activity
                        </td>
                        <td>
                            Link
                        </td>
                    </tr>
                </thead>
                <tbody>
                    {rows.map((row, index) => {
                        return (
                            <tr key={index}>
                                <td>
                                    {row.exchange}
                                </td>
                                <td>
                                    {row.coinName}
                                </td>
                                <td>
                                    {row.coinSymbol}
                                </td>
                                <td>
                                    {row.price}
                                </td>
                                <td>
                                    {row.activity}
                                </td>
                                <td>
                                    <a href={row.link} target="_blank" rel="noreferrer">
                                        {row.link}
                                    </a>
                                </td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>)
    }
    return table;
}

export default RecommendationsTable;
