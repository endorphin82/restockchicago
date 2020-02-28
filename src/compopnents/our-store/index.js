import React from 'react';
import './styles.scss';

const OurStore = () => {
  return (
    <section className="our-store">
      <div className="our-store__title">
        <span>Our Store</span>
      </div>
      <div className="our-store__contacts contacts__our-store">
        <span className="contacts__our-store_title-address">Woodfield Mall</span>
        <p className="contacts__our-store_address">5 Woodfield Mall G120,</p>
        <p className="contacts__our-store_address">Schaumburg, IL 60173</p>
        <p className="contacts__our-store_tel"><a href="tel:2245208414">(224) 520-8414</a></p>
        <p className="contacts__our-store_operation-title">Hours of Operation</p>
        <p className="contacts__our-store_operation">Monday - Saturday</p>
        <p className="contacts__our-store_operation">10AM - 9PM</p>
        <p className="contacts__our-store_operation">Sunday</p>
        <p className="contacts__our-store_operation">11AM - 6PM</p>
      </div>
      <div className="our-store__empty"/>
    </section>
  );
};

export default OurStore;