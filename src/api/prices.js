import axios from 'axios';

const baseURL = 'https://8qqn8e39od.execute-api.eu-central-1.amazonaws.com/prod/';
const api = axios.create({ 
    baseURL
});

export default {
    getPlans: country => {
        return api.get(`subscriptions/plans?country=${country}`);
    }
};