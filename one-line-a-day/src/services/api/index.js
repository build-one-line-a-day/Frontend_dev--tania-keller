import axios from 'axios';

//general URL. We add multiple endpoints as diff fxns below
const apiURL = `https://jsonplaceholder.typicode.com`;

//access a specific entry
export function getEntry(id) {
    return axios.get(`${apiURL}/entry/${id}`);
}

//return all entries
export function getEntries() {
    return axios.get(`${apiURL}/entry`);
}

export function addEntry(entry) {
    return axios.post(`${apiURL}/entry`, entry);
}
export function editEntry(id, entry) {
    return axios.put(`${apiURL}/entry/${id}`, entry);
}

const api = {
    // getEntries: getEntries
    // addEntry: addEntry
    //don't need to add keys as in the previous two lines b/c when you give a var directly to a new object, 
    //it will automatically make a new key using what you provide and will set its value to the same thing you've provided
    getEntry,
    getEntries,
    addEntry,
    editEntry
};

export default api;