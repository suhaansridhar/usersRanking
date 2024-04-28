import React from 'react';
import { connect } from 'react-redux';
import {inc, dec} from '../usersDashboard/userActionCreator';

function DashboardComponent({ DashUsers, inc, dec }) {
  return (
    <div className='dash--container'>
      <h1>DashBoard</h1>
      {DashUsers.map((user) => (
        <li key={user.id}>
          <h3>Name: {user.fname} {user.lname} {user.id}</h3>
          <h4>Age: {user.age}</h4>
          <h4>Gender: {user.gender}</h4>
          <h4><button onClick={() => inc(user.id)}>Inc</button>Likes: {user.likes} <button onClick={() => dec(user.id)}>Dec</button></h4>
        </li>
        ))}
    </div>
  )
}

const mapStateToProps = state => {
  return{
    DashUsers : state.userReducer
  }
}

const mapDispatchToProps = dispatch => {
  return{
    inc : (userid) => dispatch(inc(userid)),
    dec : (userid) => dispatch(dec(userid))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(DashboardComponent);
