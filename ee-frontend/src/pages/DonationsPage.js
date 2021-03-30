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
                <h3>Donated Items</h3>
                <ul className="items">
                {this.state.items.map(item => {
                            return (<DonationItem item={item} />);
                        }
                        )}
                </ul>
            </div>


        )
    }
}

export default DonationsPage;
