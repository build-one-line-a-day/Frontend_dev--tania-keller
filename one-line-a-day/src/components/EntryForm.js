import React, { useState } from 'react';

const EntryForm = (props) => {
    console.log(props);
    const { submitEntry, initialEntry, buttonText, history } = props;
    const [entry, setEntry] = useState(initialEntry || {
        id: '',
        title: '',
        date: '',
        entry: ''
    });
    const changeHandler = event => {
        setEntry({ ...entry, [event.target.name]: event.target.value });
    }
    const submitHandler = event => {
        event.preventDefault();
        submitEntry(entry);
        setEntry(entry);
        //'setPost' clears form by resetting all associated values when submit is pressed
        setEntry({ userId: '', id: '', title: '', date: '', entry: '' });
        //navigate back to home
        history.push('/');
    };
    return (
        <div className='EntryForm'>
            <form onSubmit={submitHandler}>
                <fieldset>
                    <legend>Create New Entry</legend>
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
                                value={entry.title}
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
                                value={entry.date}
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
                                value={entry.entry}
                                onChange={changeHandler}
                            />
                        </label>
                    </div>
                    <button>{buttonText}</button>
                </fieldset>
            </form>
        </div>
    );
}

export default EntryForm;
