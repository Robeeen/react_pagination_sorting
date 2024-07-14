import React from 'react';
import { APIState } from '../context/Context';

function Users() {

  const users  = APIState();
  //console.log(users);
  return (
    <div>
      <ul>
        {users.users.map((user, index) => (
          <li key={index}>{user.age} | {user.firstName} | {user.email} |</li>
      )) }
        {/* { JSON.stringify(users.users.total)} <br />
        { JSON.stringify(users.users.limit)} <br /> */}
        {/* { users.users[0].email} */}
      </ul>
    </div>
  )
}

export default Users