import React, { useState } from "react";
import Menu from "../../components/Menu/Menu";
import MiniTicker from "./MiniTicker/MiniTicker";
import BookTicker from "./BookTicker/BookTicker";
import Wallet from "./Wallet/Wallet";
import CandleChart from "./CandleChart"
import NewOrderButton from "../../components/NewOrder/NewOrderButton";
import NewOrderModal from "../../components/NewOrder/NewOrderModal";

import useWebSocket from 'react-use-websocket';

function Dashboard() {

    const [miniTickerState, setMiniTickerState] = useState({});
    const [bookState, setBookState] = useState({});
    const [balanceState, setBalanceState] = useState({});
    const [wallet, setWallet] = useState({});

    function onWalletUpdate(walletObj){
        setWallet(walletObj);
    }

    const { lastJsonMessage } = useWebSocket(process.env.REACT_APP_WS_URL, {
        onOpen: () => console.log(`Connected on WebSocket server`),
        onMessage: () => {
            if (lastJsonMessage) {
                if (lastJsonMessage.miniTicker) setMiniTickerState(lastJsonMessage.miniTicker);
                if (lastJsonMessage.book) {
                    lastJsonMessage.book.forEach(bookItem => bookState[bookItem.symbol] = bookItem);
                    setBookState(bookState);
                }
                if (lastJsonMessage.balance) setBalanceState(lastJsonMessage.balance);
            }
        },
        queryParams: {'token': localStorage.getItem('token')},
        onError: (err) => console.log(err),
        shouldReconnect: (closeEvent) => true,
        reconnectInterval: 3000
    })


    return (
        <React.Fragment>
            <Menu />
            <main className="content">
                <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center py-4">
                    <div className="d-block mb-4 mb-md-0">
                        <h1 className="h4">Dashboard</h1>
                    </div>
                    <div >
                        <NewOrderButton />
                    </div>
                </div>

                <CandleChart symbol="BTCUSD" />

                <MiniTicker data={miniTickerState} />
                
                <div className="row">
                    <BookTicker data={bookState} />
                    <Wallet data={balanceState} onUpdate={onWalletUpdate} />
                </div>
            </main>

            <NewOrderModal wallet={wallet} />
        </React.Fragment>
    );
}

export default Dashboard;