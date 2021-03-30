import React from 'react';
import { render } from '@testing-library/react';
import {CartView} from './CartView'


  const setup = () => {
    return render(
      <CartView />
    );
  };


describe('CartView', () => {
    it('has a href', () => {
        const { container } = setup();
        const a = container.querySelector('a');
        expect(a).toBeInTheDocument();
    });

});