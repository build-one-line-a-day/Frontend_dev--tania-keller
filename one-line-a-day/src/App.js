import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Card from './components/Card';
import PostForm from './components/PostForm';
import api from './services/api/';
import './App.scss';

function EditForm(props) {
  //destructured: getting editPost out of our props object
  const { editPost, match, buttonText } = props;
  const id = match.params.id;
  const { initialPost, setInitialPost } = useState(null);
  //useEffect will fire to get our api whenever the id changes(i.e. whenever we get a new post)
  useEffect(() => {
    api.getPost(id)
      .then(res => {
        setInitialPost(res.data);
      });
  }, [id]);
  if(initialPost === null) {
    return <div>Loading...</div>;
  }
  return (
    <PostForm {...props}
      initialPost={initialPost}
      submitPost={props.editPost}
      buttonText={buttonText}
    />
  );
}
function App() {
  const [allPosts, setAllPosts] = useState([
    // { userId: 1234, id: 0, title: 'Day One', date: 'July 29, 2019' },
    // { userId: 1234, id: 1, title: 'Day Two', date: 'July 30, 2019' },
  ]);
  const [error, setError] = useState('');
  useEffect(() => {
    // axios.get(`https://jsonplaceholder.typicode.com/posts`)
    api.getAllPosts()
      .then(res => {
        //console.log(res);
        setAllPosts(res.data);
      })
      .catch(error => {
        console.log('error occurred', error);
      })
  }, [error]);
  //addPost fxn
  const addPost = post => {
    //send post to the api URL every time we submit a post on our form and add the post object to it
    // axios.post('https://jsonplaceholder.typicode.com/posts', post)
    api.addPost(post)
      .then(res => {
        // console.log(res)
        setAllPosts([...allPosts, res.data]);
      });
  };
  //editPost fxn
  const editPost = editedPost => {
    api.editPost(editedPost.id, editedPost)
      .then(res => {
        //want to make changes on our copy of `allPost` array called `allPostCopy`.
        const allPostsCopy = [...allPosts];
        //searching for speciic post in our array that needs to be edited.
        const oldPost = allPostsCopy.find(post => post.id === editedPost.id);
        // console.log(editedPost, oldPost);
        Object.assign(oldPost, editedPost);
        setAllPosts(allPostsCopy);
      });
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
          render={props => <EditForm {...props}
            editPost={editPost}
            submitPost={editPost}
            buttonText='Edit Post'
          />}
        />
      </div >
    </div>
  );
}

export default App;



