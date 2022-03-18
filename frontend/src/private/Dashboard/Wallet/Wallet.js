import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { getBalance } from '../../../services/ExchangeService';
import '../Dashboard.css';

/**
 * props:
 */
function Wallet(props) {
    const history = useHistory();

    const [balances, setBalances] = useState([]);

    useEffect(() => {
        const token = localStorage.getItem("token");

        getBalance(token)
            .then(info => {

                const balances = Object.entries(info).map(item => {
                    return {
                        symbol: item[0],
                        available: item[1].available,
                        onOrder: item[1].onOrder
                    }
                })

                setBalances(balances)
            })
            .catch(err => {
                if (err.response && err.response.status === 401)
                    return history.push('/')

                console.error(err.response ? err.response.data : err.message);
            })
    }, [props.data]);

    return (
        <div className="col-sm-12 col-md-6 mb-4">
            <div className="card border-0 shadow">
                <div className="card-header">
                    <div className="row">
                        <div className="col">
                            <h2 className="fs-5 fw-bold mb-0">Wallet</h2>
                        </div>
                    </div>
                </div>
                <div className="table-responsive divScroll">
                    <table className="table align-items-center table-flush table-sm table-hover tableFixHead">
                        <thead className="thead-light">
                            <tr>
                                <th className="border-bottom col-2" scope="col">SYMBOL</th>
                                <th className="border-bottom col-2" scope="col">FREE</th>
                                <th className="border-bottom col-2" scope="col">LOCK</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                balances && balances.length
                                    ? balances.map(item => (
                                        <tr key={item.symbol}>
                                            <td className="text-gray-900">{item.symbol}</td>
                                            <td className="text-gray-900">{item.available.substring(0,8)}</td>
                                            <td className="text-gray-900">{item.onOrder.substring(0,8)}</td>
                                        </tr>
                                    ))
                                    : <React.Fragment></React.Fragment>
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default Wallet;