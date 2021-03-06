import React from 'react';
import { render } from '@testing-library/react';
import SalesItem from './SalesItem';
import { MemoryRouter } from 'react-router-dom';

const item = {
    name: 'item1',
    price: 2.8,
    quantity: 2,
    image: 'apple-tart.jpg'
};

const setup = (propItem = item) => {
    return render(
        <MemoryRouter>
            <SalesItem item={propItem} />
        </MemoryRouter>
    );
};

describe('SalesItem', () => {
    it('has image', () => {
        const { container } = setup();
        const image = container.querySelector('img');
        expect(image).toBeInTheDocument();
    });

    it('displays items image when user have one', () => {
        const { container } = setup();
        const image = container.querySelector('img');
        expect(image.src).toContain('http://localhost/images/' + item.image);
    });
});