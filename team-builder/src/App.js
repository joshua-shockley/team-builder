import React, { useState } from 'react';
import TeamListForm from './TeamListForm.js';
import TeamCard from './TeamCard.js';
import './App.css';
import data from './data.js';

console.log(data);
function App() {
    const [tMembers, setTMembers] = useState(data);
    const addNewMember = member =>{
      setTMembers([...tMembers, member]);
      
    };

  return (

    <div className="App">
      <header className="App-header">
        <h1>
          Team of the Century!
        </h1>
      </header>
          <TeamListForm  addNewMember={addNewMember} />
          {/* line above connects to line 9-11 above to create the new member info */}
          {/* everything below in the set of brackets is creating the work that then puts the result into TeamCard component */}
          { 
          tMembers.map((themembers, i) => {
              return(
                  <TeamCard 
                  themembers = {themembers}
                  key={i}
                  />
              );
            })
          }
    </div>
  );
}

export default App;
