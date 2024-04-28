import React from 'react'
import { useRef } from 'react';
import { useState } from 'react'
import { connect } from 'react-redux';
import { addUser } from '../usersDashboard/userActionCreator';

function FormComponent({ addUser }) {
    const [user, setUser] = useState({fname: "", lname: "", age: 0, gender: "", likes: 0});
    const inputRef = useRef(null);

    function handleChange(event){
        const {name, value} = event.target;
        if(user.age <= 0 && parseInt(value) <= 0){
            alert("Age should be greater than 0");
            return;
        }
        setUser({...user, [name]: name === 'age' ? parseInt(value) : value, id: Date.now()});
    }

    function handleForm(event) {
        event.preventDefault();
        if(user.age <= 0){
            alert("Age should be greater than 0");
            return;
        }
        addUser(user);
        setUser({ fname: "", lname: "", age: "", gender: "", likes: 0 });
        inputRef.current.focus();
    }

  return (
    <div className='form--container'>
        <h1>Form</h1>
        <form onSubmit={handleForm}>
            <div className="form--container--inputs">
                <h3>First Name:</h3>
                <input type="text" 
                    value={user.fname} 
                    placeholder="Enter your First Name" 
                    onChange={handleChange}
                    name = "fname" 
                    autoFocus
                    ref={inputRef}
                    required
                    />
            </div>

            <div className="form--container--inputs">
                <h3>Last Name:</h3>
                <input type="text" 
                    value={user.lname} 
                    placeholder="Enter your Last Name"
                    onChange={handleChange}
                    name = "lname"
                    required
                    />
            </div>

            <div className="form--container--inputs">
                <h3>Age: </h3>
                <input type="number" 
                    value={user.age}
                    name="age"
                    onChange={handleChange}
                    placeholder="Enter your age"
                    className='input--container--age'
                    required
                    />
            </div>

            <div className="form--container--inputs">
                <label htmlFor="gender">Gender:</label>
                <select name="gender" value={user.gender} onChange={handleChange} required>
                    <option>Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <button type='submit' className='submit--button'>Submit</button>
        </form>
    </div>
  )
}

const mapDispatchToProps = dispatch => {
    return{
        addUser : (user) => dispatch(addUser(user))
    }
}

export default connect (null, mapDispatchToProps)(FormComponent);