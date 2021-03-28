import React from 'react';
import { render, waitFor } from '@testing-library/react';
import { SalesPage } from './SalesPage';
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
        quantity: 1,
        price: 12.7,
        image: '/resources/images/item1.jpg',
      },
      {
        id: 2,
        name: 'item2',
        quantity: 2,
        price: 10.7,
        image: '/resources/images/item2.jpg',
      },
      {
        id: 3,
        name: 'item3',
        quantity: 10,
        price: 14,
        image: '/resources/images/item3.jpg',
      },

    ]
  },
};


const setup = () => {
  return render(
    <SalesPage />
  );
};

describe('SalesPage', () => {
  describe('Layout', () => {

    it('has header of Sales', () => {
      const { container } = render(<SalesPage />);
      const header = container.querySelector('h2');
      expect(header).toHaveTextContent('Baked Items');
    });

    it('has label for Total Amount', () => {
      const { container } = render(<SalesPage />);
      const totalAmountLabel = container.querySelector('label');
      expect(totalAmountLabel).toHaveTextContent('Total amount:');
    });
    it('has Checkout button', () => {
      const { container } = render(<SalesPage />);
      const button = container.querySelector('h2');
      expect(button).toBeInTheDocument();
    })
  })

  describe('Lifecycle', () => {
    it('calls list sales items api when it is rendered', () => {
      itemsCalls.listBakeItems = jest.fn().mockResolvedValue(mockedEmptySuccessResponse);
      setup();
      expect(itemsCalls.listBakeItems).toHaveBeenCalledTimes(1);

    });
    /* it('displays three items when listItems api returns three items', async () => {
         itemsCalls.listBakeItems = jest
           .fn()
           .mockResolvedValue(mockSuccessGetItems);
         const { queryByTestId } = setup();
         await waitFor(()=>{
             const itemGroup = queryByTestId(queryByTestId);
             expect(itemGroup.childElementCount).toHaveBeenCalledTimes(3);
         });
         
       });*/
  })


})