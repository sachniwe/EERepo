import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { DonationsPage } from './DonationsPage';
import * as itemsCalls from '../services/ItemsService';


const mockedEmptySuccessResponse = {
    data: {
        items: [],
    },
};

const mockSuccessGetItems = {
    data: {
        items: [
            {
                id: 1,
                name: 'item1',
                price: 12.7,
                image: '/resources/images/item1.jpg',
            },
            {
                id: 2,
                name: 'item2',
                price: 10.7,
                image: '/resources/images/item2.jpg',
            },
            {
                id: 3,
                name: 'item3',
                price: 14,
                image: '/resources/images/item3.jpg',
            },

        ]
    },
};


const setup = () => {
    return render(
        <DonationsPage />
    );
};

describe('DonationsPagePage', () => {
    describe('Layout', () => {

        it('has header of Sales', () => {
            const { container } = render(<DonationsPage />);
            const header = container.querySelector('h3');
            expect(header).toHaveTextContent('Donated Items');
        });

        
    })

    describe('Lifecycle', () => {
        it('calls list sales items api when it is rendered', () => {
            itemsCalls.listDonatedItems = jest.fn().mockResolvedValue(mockedEmptySuccessResponse);
            setup();
            expect(itemsCalls.listDonatedItems).toHaveBeenCalledTimes(1);

        });
        /*it('displays three items when listItems api returns three items', async () => {
            itemsCalls.listBakeItems = jest
              .fn()
              .mockResolvedValue(mockSuccessGetItems);
            const { queryByTestId } = setup();
            await waitFor(()=>{
                const itemGroup = queryByTestId(queryByTestId);
                expect(itemGroup.childElementCount).toBe(3);
            });
            
          });*/
    })


})