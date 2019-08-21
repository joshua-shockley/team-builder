import React from 'react';

const TeamList = props => {
    console.log(props);

    return (
        <div className="theTeamMembers">
        {props.thePeeps.map(member => {
            return (
            <div className="theMember" key={member.id}>
                <h2>Team Member</h2>
                <p> Name: {member.name} </p>
                <p> Email: {member.email} </p>
                <p> Role: {member.role} </p>
            </div>        
            );
        })}
        </div>
    );
};
export default TeamList;