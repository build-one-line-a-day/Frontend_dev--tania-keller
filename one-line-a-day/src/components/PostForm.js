import React, { useState } from 'react';

const PostForm = (props) => {
    console.log(props);
    const { submitPost, initialPost, buttonText, history } = props;
    const [post, setPost] = useState(initialPost || {
        id: '',
        title: '',
        date: '',
        entry: ''
    });
    const changeHandler = event => {
        setPost({ ...post, [event.target.name]: event.target.value });
    }
    const submitHandler = event => {
        event.preventDefault();
        submitPost(post);
        setPost(post);
        //'setPost' clears form by resetting all associated values when submit is pressed
        setPost({ userId: '', id: '', title: '', date: '', entry: '' });
        //navigate back to home
        history.push('/');
    };
    return (
        <div className='PostForm'>
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Create New Post</legend>
                    {/* <div className='idField'>
                        <label>
                            Id:
                            <input
                                name='id'
                                type='text'
                                placeholder='id'
                                value={post.id}
                                onChange={changeHandler}
                            />
                        </label>
                    </div> */}
                    <div className='titleField'>
                        <label>
                            Title:
                            <input
                                name='title'
                                type='text'
                                placeholder='Enter Title'
                                value={post.title}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <div className='dateField'>
                        <label>
                            Date:
                            <input
                                name='date'
                                type='text'
                                placeholder='Enter Date'
                                value={post.date}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <div className='entryField'>
                        <label>
                            Entry:
                            <input
                                name='entry'
                                type='text'
                                placeholder='Write Entry Here'
                                value={post.entry}
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
