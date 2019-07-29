import React, { useState } from 'react';

const PostForm = (props) => {
    console.log(props);
    const { submitPost, initialPost, buttonText, history } = props;
    const [post, setPost] = useState(initialPost || {
        name: '',
        date: ''
    });
    const changeHandler = event => {
        setPost({ ...post, [event.target.name]: event.target.value });
    }
    const submitHandler = event => {
        event.preventDefault();
        submitPost(post);
        setPost(post);
        setPost({ name: '', date: '' });
        history.push('/');
    };
    return (
        <div className='postForm'>
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Create New Post</legend>
                    <div className='titleField'>
                        <label>
                            Title
                            <input
                                name='title'
                                type='text'
                                placeholder='Post here'
                                value={post.title}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <div className='dateField'>
                        <label>
                            Date
                            <input
                                name='date'
                                type='text'
                                placeholder='Enter Date'
                                value={post.date}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <button type='submit'>{buttonText}</button>
                </fieldset>
            </form>
        </div>
    );

}

export default PostForm;
