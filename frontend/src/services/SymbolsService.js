import axios from 'axios';

const SYMBOLS_URL = `${process.env.REACT_APP_API_URL}/symbols` || 'http://localhost:3001/symbols';

export async function getSymbols(token) {
    const headers = { 'authorization': token };
    const response = await axios.get(SYMBOLS_URL, { headers });
    return response.data;
}

export async function getSymbol(symbol, token) {
    const headers = { 'authorization': token };
    const response = await axios.get(`${SYMBOLS_URL}/${symbol}`, { headers });
    return response.data;
}
