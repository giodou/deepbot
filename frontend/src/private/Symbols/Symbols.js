import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import Menu from "../../components/Menu/Menu";
import { getSymbols, syncSymbols } from '../../services/SymbolsService'
import SymbolRow from "./SymbowRow";

function Symbols() {

    const history = useHistory();

    const [symbols, setSymbols] = useState([]);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [isSyncing, setIsSyncing] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token');
        getSymbols(token)
            .then(response => {
                console.log('symbols: ', response)
                setSymbols(response);
                setError('');
            })
            .catch(err => {
                if (err.response && err.response.status === 401)
                    return history.push('/')

                setSuccess('');
                setError(err.response ? err.response.data : err.message);
            })
    }, [isSyncing]);
    
    function onSyncClick(event){
        const token = localStorage.getItem('token');
        setIsSyncing(true);

        syncSymbols(token)
            .then(res => {
                setIsSyncing(false);
            })
            .catch(err => {
                setIsSyncing(false);
                if (err.response && err.response.status === 401)
                    return history.push('/')

                setSuccess('');
                setError(err.response ? err.response.data : err.message);
            })
    }

    return (
        <React.Fragment>
            <Menu />
            
            <main className="content">
            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-4 mb-md-0">
                        <h1 className="h4">Symbols</h1>
                    </div>
                </div>

                <div className="row">
                    <div className="col-12">
                        <div className="col-12 mb-4">
                            <div className="card border-0 shadow">
                                <div className="card-header">
                                    <div className="row align-items-center">
                                        <div className="col">
                                            <h2 className="fs-5 fw-bold mb-0">
                                                Info about symbols config
                                            </h2>
                                        </div>

                                    </div>
                                </div>
                                <div className="table-responsive">
                                    <table className="table align-items-center table-flush">
                                        <thead>
                                            <tr>
                                                <th className="border-bottom" scope="col">Symbol</th>
                                                <th className="border-bottom" scope="col">Base Prec</th>
                                                <th className="border-bottom" scope="col">Quote Prec</th>
                                                <th className="border-bottom" scope="col">Min Notional</th>
                                                <th className="border-bottom" scope="col">Min Lot Size</th>
                                                <th className="border-bottom" scope="col">Actions</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                symbols.map(item =>
                                                    <SymbolRow key={item.symbol} data={item} />
                                                )
                                            }
                                        </tbody>
                                        <tfoot>
                                            <tr>
                                                <td colSpan={2}>
                                                    <button onClick={onSyncClick} className="btn btn-primary animate-up-2" type="button">
                                                        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-xs" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                                                        </svg>
                                                       {isSyncing ? ' Syncing...' :  ' Sync'}
                                                    </button>
                                                </td>
                                                <td>
                                                    {
                                                        error
                                                            ? <div className="alert alert-danger mt-2 col-9 py-2">{error}</div>
                                                            : <React.Fragment></React.Fragment>
                                                    }
                                                    {
                                                        success
                                                            ? <div className="alert alert-success mt-2 col-9 py-2">{success}</div>
                                                            : <React.Fragment></React.Fragment>
                                                    }
                                                </td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </main>
        </React.Fragment>
    )
};

export default Symbols;