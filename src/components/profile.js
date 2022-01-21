import React from 'react';
import {useSelector } from 'react-redux'

function Profile() {
  const user = useSelector((state) => state.user.value);
  const theme = useSelector((state) => state.theme.value)
  return(
   <div style={{color:theme}}>
      <h2>Profile</h2>
        <p>Name: {user.name} </p>
        <p>Age: {user.age}</p>
        <p>Email: {user.email}</p>
  </div>
  )
}

export default Profile;
