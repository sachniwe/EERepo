import React, { useState, useEffect } from 'react';
import * as itemsCalls from '../services/ItemsService';

export class CartView extends React.Component {


    render() {
        return (
            <div>
                <p>You have <span></span> items in your cart.</p>
                <p>Total <span></span> items in your cart.</p>
                <p>
                    <a href="" className="btn btn-success">View cart</a>
                </p>

            </div>

        )
    }
}

export default CartView;