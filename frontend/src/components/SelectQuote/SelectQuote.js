import React, { useState } from "react";

const DEFAULT_QUOTE_PROPERTY = 'defaultQuote';
/**
 * proprs
 * - OnChange
 */
function SelectQuote(props) {

    const [defaulQuote, setDeafaultQuote] = useState(getDefaultQuote);

    return (
        <select id="selectQuote" className="form-select" defaultValue={defaulQuote} onChange={props.onChange} >
            <option value="ALL">All</option>
            <option value="FAVORITES">Only favorites</option>
            <option value="BNB">BNB</option>
            <option value="BRL">BRL</option>
            <option value="BTC">BTC</option>
            <option value="USD">USD</option>
            <option value="USDT">USDT</option>
        </select>
    );
}

export function setDefaultQuote(quote){
    localStorage.setItem(DEFAULT_QUOTE_PROPERTY, quote);
}

export function getDefaultQuote() {
    return localStorage.getItem(DEFAULT_QUOTE_PROPERTY) ? localStorage.getItem(DEFAULT_QUOTE_PROPERTY) : "USD";
}

export function filterSymbolObject(symbols, quote) {
    return symbols.filter(s => {
        if (quote === 'ALL')
            return true;

        if (quote === 'FAVORITES')
            return s.isFavorite;
        else
            return s.symbol.endsWith(quote);
    })
}

export default SelectQuote;