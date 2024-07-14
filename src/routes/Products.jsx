import React from 'react';
import { ProductState } from '../context/Context';
import { Link, NavLink } from 'react-router-dom';

function Products() {
  
  const products  = ProductState();
  
  return (
    <div>
      <Link activeStyle={{  backgroundColor: '#fdc936'  }} to={'/products'}>Products</Link> | 
      <Link activeStyle={{  backgroundColor: '#fdc936'  }} to={'/users'}> Users</Link> | 
       <NavLink activeStyle={{  backgroundColor: '#fdc936'  }} to={'/'}>Home</NavLink>
      < br />
       <table>
        <thead>
          <tr>
            <th>Product Title</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Rating</th>
            <th>SKU</th>
            <th>Stock</th>
            <th>Availibility</th>
          </tr>
        </thead>
        <tbody>
          {products.products.map((user) => (
            <tr key={user.id}>
              <td>{user.title}</td>
              <td>{user.category}</td>
              <td>{user.brand}</td>
              <td>{user.price}</td>
              <td>{user.rating}</td>
              <td>{user.sku}</td>
              <td>{user.stock}</td>
              <td>{user.availabilityStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

}

export default Products