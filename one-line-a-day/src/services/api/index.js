import axios from 'axios';

const apiURL = `https://jsonplaceholder.typicode.com`;

//access a specific post
export function getPost(id) {
    return axios.get(`${apiURL}/post/${id}`);
}

//return all posts
export function getAllPosts() {
    return axios.get(`${apiURL}/post`);
}

export function addPost(post) {
    return axios.post(`${apiURL}/post`, post);
}
export function editPost(id, post) {
    return axios.put(`${apiURL}/post/${id}`, post);
}

const api = {
    // getAllPosts: getAllPosts
    // addPost: addPost
    //don't need to add keys as in the previous two lines b/c when you give a var directly to a new object, 
    //it will automatically make a new key using what you provide and will set its value to the same thing you've provided
    getPost,
    getAllPosts,
    addPost,
    editPost
};

export default api;