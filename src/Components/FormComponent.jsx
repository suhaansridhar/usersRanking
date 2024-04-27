import React from 'react'
import { useState } from 'react'
import { connect } from 'react-redux';
import {addUser} from '../usersDashboard/userActionCreator';

function FormComponent({ addUser }) {
    const [user, setUser] = useState({fname: "", lname: "", age: 0, gender: "", likes: 0});

    function handleChange(event){
        const {name, value} = event.target;
        setUser({...user, [name]: name === 'age' ? parseInt(value) : value});
    }

    function handleForm(event) {
        event.preventDefault();
        addUser(user);
        setUser({ fname: "", lname: "", age: "", gender: "", likes: 0 });
    }
    

  return (
    <div className='form--container'>
        <form onSubmit={handleForm}>
            <div className="form--container--inputs">
                <h4>First Name:</h4>
                <input type="text" 
                    value={user.fname} 
                    placeholder="Enter your First Name" 
                    onChange={handleChange}
                    name = "fname" 
                    autoFocus
                    />
            </div>

            <div className="form--container--inputs">
                <h4>Last Name:</h4>
                <input type="text" 
                    value={user.lname} 
                    placeholder="Enter your Last Name"
                    onChange={handleChange}
                    name = "lname"/>
            </div>

            <div className="form--container--inputs">
                <h4>Age: </h4>
                <input type="number" 
                    value={user.age}
                    name="age"
                    onChange={handleChange}
                    placeholder="Enter your age"
                    />
            </div>

            <div className="form--container--inputs">
                <label htmlFor="gender">Gender:</label>
                <select name="gender" value={user.gender} onChange={handleChange}>
                    <option>Select an option</option>
                    <option value="Male">Male</option>
                    <option value="Female">Female</option>
                </select>
            </div>

            <button type='submit'>Submit</button>
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