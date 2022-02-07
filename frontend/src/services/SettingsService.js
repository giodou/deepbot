import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export async function  getSettings(token){
    const settingUrl = `${API_URL}/settings`;
    const headers = {
        'authorization': token
    }
    const response = await axios.get(settingUrl, {headers})
    return response.data;
}
