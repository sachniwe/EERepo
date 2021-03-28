import axios from 'axios';

export const listBakeItems = () => {
    return axios.get('/api/1.0/bakeSales');
}

export const listDonatedItems = () => {
    return axios.get('/api/1.0/donationSales');
}