import React, { useState } from 'react';

 const TeamListForm = props => {
    const [member, setMember] = useState({name: '', email: '', role: ''});
    const changeHandler = event => {
        //these are the computed properties
        console.log(event.target.value);
        setMember({ ...member, [event.target.name]: event.target.value});
    };
    const submitForm = event => {
        event.preventDefault();
        const newMember = {
            ...member
        };
        props.addNewMember(newMember);
        setMember({name: '', email: '', role: ''});
    };

    return (
        <form onSubmit={submitForm}>
        <label htmlFor="name">Name</label>
        <input
        type="text"
        name="name"
        placeholder="Full Name"
        value={member.name}
        onChange={changeHandler}
        />
        <label htmlFor="email">Email</label>
        <input
        type="text"
        name="email"
        placeholder="Email"
        value={member.email}
        onchange={changeHandler}
        />
        <label htmlFor="role">Role</label>
        <input 
        type="text"
        name="role"
        placeholder="Role"
        value={member.role}
        onchange={changeHandler}
        />
        
        </form>

    );
}

export default TeamListForm;