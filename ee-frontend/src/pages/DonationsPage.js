import React, { useState, useEffect } from 'react';
import * as itemsCalls from '../services/ItemsService';
import DonationItem from './DonationItem';


export class DonationsPage extends React.Component {

    state = {
        items: [],
        cartItems:[]
    };


    componentDidMount() {
        itemsCalls.listDonatedItems()
            .then((response) => {
                this.setState({
                    items: response.data
                })
            })
    }


    render() {
        return (
            <div>
                <h2 className="display-4 mb-6">Donated Items</h2>
                <div className="row"></div>
                <div>
                    <div data-testis="itemGroup">
                        {this.state.items.map(item => {
                            return (<DonationItem item={item} />);
                        }
                        )}
                    </div>
                </div>
                <div className="row"></div>

                <label>Total amount: </label>
                <br />
                <button type="button" className="btn btn-primary">Checkout</button>

            </div>

        )
    }
}

export default DonationsPage;