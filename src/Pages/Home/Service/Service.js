import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {name, id, img, description, price} = service;
    return (
        <div className='service'>
            <img className='w-100' src={img} alt="" />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p><small>{description}</small></p>
            <Link to={`/service/${id}`} className='btn btn-primary'>Book: {name}</Link>
        </div>
    );
};

export default Service;