import React, { useEffect, useState } from 'react';
import axios from 'axios';
import PostForm from './PostForm';

export default function CreatePost() {
    const [post, setPost] = useState([]);
    const [error, setError] = useState('');
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res);
            })
            .catch(error => {
                console.log('error occurred', error);
            })
    }, [error])
    return (
        <div>
            <h1>My Posts:</h1>
        </div>
    )
}

// return <section className='character-list grid-view'>
//     <h1>List of Characters:</h1>
//     <h2>
//         {character.map(results => (
//             <CharacterCard name={results.name}
//                 id={results.id}
//                 status={results.status}
//                 species={results.species} />
//         ))}
//     </h2>
// </section>

// }
