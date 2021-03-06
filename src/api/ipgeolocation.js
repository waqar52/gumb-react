import axios from 'axios';

const apiKey = '1ae2cbc21da442f498b0278af9016c6a';
const baseURL = 'https://api.ipgeolocation.io/';
const api = axios.create({ 
    baseURL
});

export default {
    getGeolocation: () => {
        return api.get(`ipgeo?apiKey=${apiKey}`);
    }
};