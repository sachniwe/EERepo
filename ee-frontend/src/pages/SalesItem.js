import React from 'react';

const SalesItem = (props) => {
  return (
    <div className="col-md-3"  >
      <button>
          <img src={`/images/${props.item.image}`} width="300" height="300" />
      </button>
      <p style={{ 'text-position': 'absolute' }}>{props.item.price}€</p>

    </div>

  );
};

export default SalesItem;