import React, { useState } from 'react';

const PostForm = (props) => {
    console.log(props);
    const { submitPost, initialPost, buttonText, history } = props;
    const [post, setPost] = useState(initialPost || {
        userId: '',
        id: '',
        title: '',
        date: ''
    });
    const changeHandler = event => {
        setPost({ ...post, [event.target.title]: event.target.value });
    }
    const submitHandler = event => {
        event.preventDefault();
        submitPost(post);
        setPost(post);
        setPost({ userId: '', id: '', title: '', date: '' });
        // history.push('/');
    };
    return (
        <div className='PostForm'>
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Create New Post</legend>
                    <div className='userIdField'>
                        <label>
                            User Id
                            <input
                                name='userId'
                                type='text'
                                placeholder='user Id'
                                value={post.userId}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <div className='idField'>
                        <label>
                            Id
                            <input
                                name='id'
                                type='text'
                                placeholder='id'
                                value={post.id}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <div className='titleField'>
                        <label>
                            Title
                            <input
                                name='title'
                                type='text'
                                placeholder='Write post here'
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
