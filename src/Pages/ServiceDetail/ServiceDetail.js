import React from 'react';
import { Link } from 'react-router-dom';

const ServiceDetail = () => {
    return (
        <div>
            <h2>this is service detail</h2>
            <Link to="/checkout" > <button className='btn btn-primary' >Checkout</button> </Link>
        </div>
    );
};

export default ServiceDetail;