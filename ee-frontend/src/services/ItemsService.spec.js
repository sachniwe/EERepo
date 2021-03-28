import axios from 'axios';
import * as itemsCalls from './ItemsService';


describe('itemServiceCalls', () => {
    describe('listBakeItems', () => {
        it('calls /api/1.0/bakeSales for list items', ()=>{
            const mockListItems = jest.fn();
            axios.get = mockListItems;
            itemsCalls.listBakeItems('/api/1.0/bakeSales');
        })
    })
    describe('listDonatedItems', () => {
        it('calls /api/1.0/donationSales for list items', ()=>{
            const mockListItems = jest.fn();
            axios.get = mockListItems;
            itemsCalls.listDonatedItems('/api/1.0/donationSales');
        })
    })
})