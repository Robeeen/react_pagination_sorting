import React from 'react';
import { UserState } from '../context/Context';
import { Link, NavLink } from 'react-router-dom';
import Spinner from 'react-Bootstrap/Spinner';


function Users() {

  const users  = UserState();
  
  return (
    <div className='container'>
      <Link activeStyle={{  backgroundColor: '#fdc936'  }} to={'/products'}>Products</Link> | 
      <Link activeStyle={{  backgroundColor: '#fdc936'  }} to={'/users'}> Users</Link> | 
       <NavLink activeStyle={{  backgroundColor: '#fdc936'  }} to={'/'}>Home</NavLink>
      < br />
       <table className='striped bordered hover'>
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
          {users.users.length > 0 ? users.users.map((user) => (
            <tr key={user.id}>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.maidenName}</td>
              <td>{user.age}</td>
              <td>{user.gender}</td>
              <td>{user.username}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.eyeColor}</td>
              <td>{user.email}</td>
            </tr>
          )): <div className='d-flex justify-content-center mt-4'>
                Loading... <Spinner animation="border" variant='danger' />
              </div>
          }
        </tbody>
      </table>
    </div>
  )
}

export default Users