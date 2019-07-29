import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const PostCard = (props) => {
    const { post } = props;

    return (
        <div className='post-card'>
            <div>{post.title}</div>
            <div>{post.date}</div>
            <Link to={`/edit/${post.id}`}>Edit</Link>
        </div>
    );
}

export default PostCard;