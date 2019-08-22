import React, { useState } from 'react';

 const TeamListForm = props => {
    const [member, setMember] = useState({name: "", email: "", role: ""});
    const changeHandler = event => {
        setMember({ ...member, [event.target.name]: event.target.value});
    };
    const submitForm = event => {
        event.preventDefault();
        props.addNewMember(member);
    };

    return (
        <div>
        <form onSubmit={submitForm}>
         <fieldset>
            <div className="theFormName">  
                <h3>Add A Team Member Here</h3>      
                <label htmlFor="name">Name: </label>
                <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={member.name}
                onChange={changeHandler}
                />
            </div>
            <div className="theFormEmail">
                <label htmlFor="email">Email: </label>
                <input
                type="text"
                name="email"
                placeholder="Email"
                value={member.email}
                onChange={changeHandler}
                />
             </div>
             <div className="theFormRole">
                <label htmlFor="role">Role: </label>
                <input 
                type="text"
                name="role"
                placeholder="Role"
                value={member.role}
                onChange={changeHandler}
                />
             </div>
        <button className="form-button" type="submit">Add A Team Member</button>
        </fieldset>
        </form>
        </div>
    );
}

export default TeamListForm;