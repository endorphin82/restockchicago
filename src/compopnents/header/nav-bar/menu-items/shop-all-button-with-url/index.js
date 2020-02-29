import React from 'react';
import './styles.scss'

const ShopAllButtonWithUrl = ({url}) => {
  return (
    <a className="shop-all-button-with-url" href={url}>
      Shop All
    </a>
  );
};

export default ShopAllButtonWithUrl;