import React from 'react';
import { connect } from 'react-redux';
import {inc, dec, remove} from '../usersDashboard/userActionCreator';

function DashboardComponent({ DashUsers, inc, dec, remove }) {
  return (
    <div className='dash--container'>
      <h1>Profiles</h1>
      {DashUsers.map((user) => (
        <li key={user.id} className='dash--container--cards'>
          <h3>Name: {user.fname} {user.lname}</h3>
          <h4>Age: {user.age}</h4>
          <h4>Gender: {user.gender}</h4>
          <h4><button onClick={() => inc(user.id)}>Like</button>{user.likes} {user.likes !== 0 ? (user.likes !== 1 ? "Likes" : "Like") : "Likes"} <button onClick={() => dec(user.id)}>Dislike</button></h4>
          <button onClick={() => remove(user.id)}>Remove Profile</button>
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
    dec : (userid) => dispatch(dec(userid)),
    remove: (userid) => dispatch(remove(userid))
  }
}

export default connect (mapStateToProps, mapDispatchToProps)(DashboardComponent);
