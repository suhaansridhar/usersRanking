import React from 'react';
import { connect } from 'react-redux';

function DashboardComponent({ DashUsers }) {
  return (
    <div className='dash--container'>
      <h1>DashBoard</h1>
      {DashUsers.map((user) => (
        <li key={user.id}>
          <h3>{user.fname}</h3>
          <h3>{user.lname}</h3>
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

export default connect (mapStateToProps, null)(DashboardComponent);
