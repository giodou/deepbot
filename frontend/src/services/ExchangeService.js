import axios from 'axios';

const BALANCE_URL = `${process.env.REACT_APP_API_URL}/exchange` || 'http://localhost:3001/exchange';

export const STOP_TYPES = ["STOP_LOSS", "STOP_LOSS_LIMIT", "TAKE_PROFIT", "TAKE_PROFIT_LIMIT"];

export async function getBalance(token) {
    const headers = { 'authorization': token };
    const response = await axios.get(`${BALANCE_URL}/balance` , { headers });

    return response.data;
}