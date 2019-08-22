import React from 'react';

const TeamCard = props => {
    console.log(props);

    return (
        
            <div className="theMember" >
                <h2 className="memberTitle">Team Member</h2>
                <button className="form-button">Edit Member Info</button>
                <p> Name: {props.themembers.name} </p>
                <p> Email: {props.themembers.email} </p>
                <p> Role: {props.themembers.role} </p>
            </div>        
            );

       };
export default TeamCard;