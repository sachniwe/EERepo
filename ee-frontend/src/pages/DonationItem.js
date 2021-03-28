import React from 'react';


const DonationItem = (props) => {
    return (

        

        <div className="col-md-3">
            <li class="nav-item">
                <a class="nav-link" href="/cakes/cinnamon-lakeside/c/261">
                <span>Cinnamon Lakeside
                </span>
                </a>
            </li>
            <p>
                <button>
                    <img src={`/images/${props.item.image}`} width="200" height="200" />
                </button>
            </p>
            <h4 style={{ 'text-position': 'absolute' }}>{props.item.price}€</h4>
        </div>


    );
};

export default DonationItem;