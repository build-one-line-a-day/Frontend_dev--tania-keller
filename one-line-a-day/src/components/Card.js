import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Card = (props) => {
    const { post } = props;
    return (
        <div className='card'>
            <div>{post.title}</div>
            <div>{post.date}</div>
            <Link to={`/edit/${post.id}`}>Edit</Link>
        </div>
    );
}

export default Card;