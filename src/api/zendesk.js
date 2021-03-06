import axios from 'axios';

const baseURL = 'https://tpb19.zendesk.com/api/v2';
const api = axios.create({ 
    baseURL,
    headers: {
        'Content-Type': 'application/json'
    }
});


export default {
    sendEmail: data => {
        return api.post('/requests.json', data);
    }
};
