import React from 'react';
import { useAPI } from '../context/Context';

function Users() {

  const {users}  = useAPI();
  console.log(users);
  return (
    <div>
      <ul>
        {users.map(user => 
          <li key={user.id}>{user.firstName}</li>
        )}
      </ul>
    </div>
  )
}

export default Users