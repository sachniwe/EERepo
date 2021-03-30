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
                <h3>Baked Items</h3>
                <ul className="items">
                {this.state.items.map(item => {
                            return (<SalesItem item={item} />);
                        }
                        )}
                </ul>
            </div>

        )
    }
}

export default SalesPage;