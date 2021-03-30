import React from 'react';
import formatCurrency from '../utils';


const DonationItem = (props) => {
    return (

      <div className="item">
            <a href="#">
                <img src={`/images/${props.item.image}`}/>
                
            </a>
            <div className="item-name">
                <div>{props.item.name}</div>
            </div>
            <div className="item-price">
                <div>{formatCurrency(props.item.price)}</div>
            </div>
    </div>


    );
};

export default DonationItem;