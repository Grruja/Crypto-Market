import React from 'react';

function Trending(props) {

    const trendingCoins = props.coinsInfo.map(coin => {
        return (
            <tr className="coin_info_cont" key={coin.id}>
                <th className="coin_text" scope="row">
                    <img alt="Coin Logo" src={coin.image}></img>
                    <div className="crypto_text">
                        <b className="coin_name">{coin.name}</b>
                        <p className="coin_name_short">{coin.symbol}</p>
                    </div>
                </th>
                <td className="coin_info_num">
                    <p className="coin_price">${(coin.current_price).toLocaleString(undefined, { minimumFractionDigits: 2 })}</p>
                    {coin.price_change_percentage_24h < 0 ? (
                        <p className="coin_change text-danger">{coin.price_change_percentage_24h.toFixed(2)} %</p>
                        ) : (
                            <p className="coin_change text-success">+{coin.price_change_percentage_24h.toFixed(2)} %</p>
                        )
                    }
                </td>
            </tr>
        )
    })


    return (
        <aside className="info_coins">
            <h3>Trending <span>24h</span> </h3>

            <table className="table table-hover table-borderless">
                <tbody className="coin_info">
                    {trendingCoins}
                </tbody>
            </table>
        </aside>
    )
}

export default Trending;