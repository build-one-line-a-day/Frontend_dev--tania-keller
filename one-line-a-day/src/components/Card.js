import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { entry } = props;
    return (
        <div className='card'>
            <div>{entry.title}</div>
            <div>{entry.date}</div>
            <Link to={`/edit/${entry.id}`}>Edit</Link>
        </div>
    );
}

export default Card;