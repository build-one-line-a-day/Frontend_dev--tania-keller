import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import Card from './components/Card';
import PostForm from './components/PostForm';

import './App.scss';

function App() {
  const [allPosts, setAllPosts] = useState([
    { userId: 1234, id: 0, title: 'Day One', date: 'July 29, 2019' },
    { userId: 1234, id: 1, title: 'Day Two', date: 'July 30, 2019' },
  ]);
  //addPost fxn
  const addPost = post => {
    setAllPosts([...allPosts, { ...post, id: Date.now() }]);
  };
  //editPost fxn
  const editPost = editedPost => {
    //want to make changes on our copy of `allPost` array called `allPostCopy`.
    const allPostsCopy = [...allPosts];
    //searching for speciic post in our array that needs to be edited.
    const oldPost = allPostsCopy.find(post => post.id === editedPost.id);
    // console.log(editedPost, oldPost);
    Object.assign(oldPost, editedPost);
    setAllPosts(allPostsCopy);
  };

  return (
    <div className="App">
      <div className="Header">
        <h1>One Line a Day</h1>
      </div>
      <div className='formField'>
        <PostForm setAllPosts={setAllPosts} />
        {allPosts.map(post => <Card post={post} />)}
      </div>
      <div className="Post">
        <Link to='/'>Home</Link>
        <Link to='/add'>Add Post</Link>
        {/* add post route */}
        <Route path='/add'
          render={props => <PostForm {...props}
            submitPost={addPost}
            buttonText='Add Post'
          />} />
        <Route exact path='/' render={props => allPosts.map(post => <Card post={post} />)} />
        {/* edit post route */}
        <Route path='/edit/:id'
          render={props => {
            // console.log(props);
            const post = allPosts.find(post => post.id.toString() === props.match.params.id);
            return <PostForm {...props}
              initialPost={post}
              submitPost={editPost}
              buttonText='Edit Post' />;
          }} />
      </div >
    </div>
  );
}

export default App;






