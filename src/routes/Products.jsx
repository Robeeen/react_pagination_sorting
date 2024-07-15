import React, { useState } from 'react';
import { ProductState } from '../context/Context';
import { Link, NavLink } from 'react-router-dom';
import Spinner from 'react-Bootstrap/Spinner';

function Products() {
  
  const products  = ProductState();

  const [ currentPage, setCurrentPage ] = useState(1)
  const [ productPerPage ] = useState(5);


  return (
    <div>
      <Link to={'/products'}>Products</Link> | 
      <Link to={'/users'}> Users</Link> | 
       <NavLink to={'/'}>Home</NavLink>
      < br />
      {/** Select Number of page to be shown in Table */}

      <label htmlFor="usersPerPage">Product per page: </label>
      <select id="usersPerPage">
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
    
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

          { products.products.length > 0 ? products.products.map((user) => (
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
          )) : <div className='d-flex justify-content-center mt-4'>
          Loading... <Spinner animation="border" variant='danger' />
      </div>}
        </tbody>
      </table>
    </div>
  )

}

export default Products