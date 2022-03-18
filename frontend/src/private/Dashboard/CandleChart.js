import React, { useEffect, useState } from react;

function CandleChart(props) {
    const [widget, setWidget] = useState({})

    useEffect(() => {

        const w = new window.TradingView.widget({
            symbol: 'BINANCE:' + props.symbol,
            autosize: true,
            interval: "1",
            timezone: "Etc/UTC",
            theme: "dark",
            style: "1",
            locale: "en",
            enable_publishing: false,
            withdateranges: true,
            allow_symbol_change: true,
            details: true,
            studies: [
                "RSI@tv-basicstudies"
            ],
            container_id: "tradingview"
        });

        setWidget(w);
    }, [props.symbol])


    return (
        <React.Fragment />
    )
}

export default CandleChart;

