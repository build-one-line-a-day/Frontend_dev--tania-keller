import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './PostForm';

export default function CreatePost() {
    // TODO: Add useState to track data from useEffect
    // const [post, setPost] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        axios.fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => (res.json())
                .then(json => console.log(json))
                .catch(err => {
                    console.log('error occurred', error);
                })
            )

        return
    })
}