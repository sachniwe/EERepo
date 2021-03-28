import React, { useState, useEffect } from 'react';
import * as itemsCalls from '../services/ItemsService';
import SalesItem from './SalesItem';


export class SalesPage extends React.Component {

    state = {
        items: []
    };


    componentDidMount() {
        itemsCalls.listBakeItems()
            .then((response) => {
                this.setState({
                    items: response.data
                })
            })
    }
    render() {
        return (
            <div>
                <h2 className="display-4 mb-6">Baked Items</h2>
                <div className="row"></div>
                <div>
                    <div data-testid="itemGroup">
                        {this.state.items.map(item => {
                            return (<SalesItem item={item} />);
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

export default SalesPage;