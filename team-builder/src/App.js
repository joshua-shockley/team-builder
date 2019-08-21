import React from 'react';
import { useState } from 'react-dom';
import TeamListForm from './TeamListForm.js';
import TeamList from './TeamList.js';
import logo from './logo.svg';
import './App.css';
import data from './data.js';

console.log(data);
function App() {


    const [tMembers, setTMembers] = useState([data]);
    const addNewMember = member =>{
      setTMembers([...tMembers, member]);
    }


  return (

    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          Team/Teams of the Century!
        </h1>
      </header>
      <h2>Lookie Lookie.... here they are!</h2>
      <TeamListForm addNewForm={addNewMember}/>
      <TeamList thePeeps={tMembers} />

    </div>
  );
}

export default App;
