import React, { useState, useEffect } from 'react';
import { Route, Link } from 'react-router-dom';
import Card from './components/Card';
import EntryForm from './components/EntryForm';
import api from './services/api/';
import './App.scss';

function EditForm(props) {
  //destructured: getting editEntry out of our props object
  const { editEntry, match, buttonText } = props;
  const id = match.params.id;
  const { initialEntry, setInitialEntry } = useState(null);
  //useEffect will fire to get our api whenever the id changes(i.e. whenever there's a new entry)
  useEffect(() => {
    api.getEntry(id)
      .then(res => {
        setInitialEntry(res.data);
      });
  }, [id]);
  if (initialEntry === null) {
    return <div>Loading...</div>;
  }
  return (
    <EntryForm {...props}
      initialEntry={initialEntry}
      submitEntry={props.editEntry}
      buttonText={buttonText}
    />
  );
}
function App() {
  const [entries, setEntries] = useState([
    { id: 0, title: 'Day One', date: 'July 29, 2019' },
    { id: 1, title: 'Day Two', date: 'July 30, 2019' },
  ]);
  const [error, setError] = useState('');
  useEffect(() => {
    // axios.get(`https://jsonplaceholder.typicode.com/posts`)
    api.getEntries()
      .then(res => {
        //console.log(res);
        setEntries(res.data);
      })
      .catch(error => {
        console.log('error occurred', error);
      })
  }, [error]);
  //addEntry fxn
  const addEntry = entry => {
    //send entry to the api URL every time we submit an entry on our form and add the entry object to it
    //axios.post used when we're creating data
    // axios.post('https://jsonplaceholder.typicode.com/posts', entry)
    api.addEntry(entry)
      .then(res => {
        // console.log(res)
        //set stateful logic for entries and add on the new entry object we created using res.data
        setEntries([...entries, res.data]);
      });
  };
  //editPost fxn
  const editEntry = editedEntry => {
    api.editEntry(editedEntry.id, editedEntry)
      .then(res => {
        //want to make changes on our copy of `entries` array called `entriesCopy`.
        const entriesCopy = [...entries];
        //searching for speciic entry in our array that needs to be edited.
        const oldEntry = entriesCopy.find(entry => entry.id === editedEntry.id);
        // console.log(editedEntry, oldEntry);
        Object.assign(oldEntry, editedEntry);
        setEntries(entriesCopy);
      });
  };

  return (
    <div className="App">
      <div className="Header">
        <h1>One Line a Day</h1>
      </div>
      <div className='formField'>
        <EntryForm setEntries={setEntries} />
        {entries.map(entry => <Card entry={entry} />)}
      </div>
      <div className="Entry">
        <div className="Link-text">
          <Link to='/'>Home</Link>
          <Link to='/add'>Add Entry</Link>
        </div>
        {/* add post route */}
        <div className="Route-text">
          <Route path='/add'
            render={props => <EntryForm {...props}
              submitEntry={addEntry}
              buttonText='Add Entry'
            />} />
          <Route exact path='/' render={props => entries.map(entry => <Card entry={entry} />)} />
          {/* edit post route */}
          <Route path='/edit/:id'
            render={props => <EditForm {...props}
              editEntry={editEntry}
              submitEntry={editEntry}
              buttonText='Edit Entry'
            />}
          />
        </div>
      </div >
    </div>
  );
}

export default App;



