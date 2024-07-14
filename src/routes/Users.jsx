import React from 'react';
import { UserState } from '../context/Context';

function Users() {

  const users  = UserState();
  
  return (
    <div>
       <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Meiden Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>UserName</th>
            <th>BloodGroup</th>
            <th>EyeColor</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {users.users.map((user) => (
            <tr key={user.id}>
              <td>{`${user.firstName} ${user.lastName}`}</td>
              <td>{`${user.maidenName}`}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.username}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.eyeColor}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default Users