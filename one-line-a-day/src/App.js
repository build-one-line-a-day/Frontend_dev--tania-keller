import React, { useState } from 'react';
import { Route, Link } from 'react-router-dom';
import CreatePost from './components/Post';
import './App.scss';

function App() {
  return (
    <div className="App">

    </div>
  );
}

export default App;

{/*

import Card from './components/Card';

function App() {
  const [people, setPeople] = useState([
    { id: 0, name: 'Eleven', email: 'eleven@email.com', role: 'frontend dev' },
    { id: 1, name: 'Mike', email: 'mike@email.com', role: 'frontend dev' },
    { id: 2, name: 'Dustin', email: 'dustin@email.com', role: 'backend dev' },
    { id: 3, name: 'Lucas', email: 'lucas@email.com', role: 'ui' },
    { id: 4, name: 'Max', email: 'max@email.com', role: 'ui' }
  ]);
  //added addPerson fxn so that form is 'dumber', making it more reusable.
  const addPerson = person => {
      //Date.now() ensures that we can't add more than one person during the 
      //same ms of time and therefore the id 's we generate will be unique.
      //make a new copy of person object and give it a new id w/ a value of 
      //Date.now.
    setPeople([...people, { ...person, id: Date.now() }]);
  };
  //added editPerson fxn
  const editPerson = editedPerson => {
    //want to make changes on our copy of `people` array called `peopleCopy`.
    const peopleCopy = [...people];
    //searching for person in our array that needs to be edited.
    const oldPerson = peopleCopy.find(person => person.id === editedPerson.id);
    // console.log(editedPerson, oldPerson);
    //oldPerson.name = editedPerson.name;
    //oldPerson.email = editedPerson.email;
    //oldPerson.role = editedPerson.role;
      //does the same thing as the three preceding oldPerson lines
    Object.assign(oldPerson, editedPerson);
    setPeople(peopleCopy);
  };
  return (
    <div className="App">
      <Link to='/'>Home</Link>
      <Link to='/add'>Add Person</Link>
      <Route path='/add' 
        render={props => <Form {...props} 
          submitPerson={addPerson} 
          buttonText='Add Person'
          />} />
      <Route exact path='/' render={props => people.map(person => <Card person={person} />)} />
      <Route path='/edit/:id' 
        render={props => {
          console.log(props);
          const person = people.find(person => person.id.toString() === props.match.params.id);
          return <Form {...props} 
            initialPerson={person}
            submitPerson={editPerson}
            buttonText='Edit Person'/>;
        }}/>
    </div >
  );
 }

// export default App; */}

// */}