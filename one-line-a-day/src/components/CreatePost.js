import PostCard from './PostCard';

function CreatePost() {
    const [post, setPost] = useState([
        { id: 0, title: 'Day One', date: 'July 29, 2019' },
        { id: 1, title: 'Day Two', date: 'July 30, 2019' },
    ]);
    //added addPost fxn
    const addPost = post => {
        setAllPosts([...allPosts, { ...post, id: Date.now() }]);
    };
    //added editPost fxn
    const editPost = editedPost => {
        //want to make changes on our copy of `allPost` array called `allPostCopy`.
        const allPostsCopy = [...allPosts];
        //searching for post in our array that needs to be edited.
        const oldPost = allPostsCopy.find(post => post.id === editedPost.id);
        // console.log(editedPost, oldPost);
        //oldPost.title = editedPost.title;
        //oldPost.date = editedPost.date;
        //does the same thing as the two preceding `oldPost` lines
        Object.assign(oldPost, editedPost);
        setAllPosts(allPostsCopy);
    };
    return (
        <div className="Post">
            {/* //   <Link to='/'>Home</Link>
    //   <Link to='/add'>Add Person</Link>
    //   <Route path='/add'  */}
            {/* //     render={props => <Form {...props}  */}
            {/* //       submitPost={addPost} 
    //       buttonText='Add Post'
    //       />} />
    //   <Route exact path='/' render={props => allPosts.map(post => <PostCard post={post} />)} />
    //   <Route path='/edit/:id'  */}
            {/* //     render={props => { */}
            {/* //       console.log(props);
    //       const post = allPosts.find(post => post.id.toString() === props.match.params.id);
    //       return <Form {...props}  */}
            {/* //         initialPost={post}
    //         submitPost={editPost}
    //         buttonText='Edit Post'/>;
    //     }}/> */}
        </div >
    );
}

export default CreatePost;
