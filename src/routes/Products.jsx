import React, { useState } from 'react';
import { ProductState } from '../context/Context';
import { Link, NavLink } from 'react-router-dom';
import Spinner from 'react-Bootstrap/Spinner';
import Pagination from 'react-bootstrap/Pagination';

function Products() {
  
  const products  = ProductState();

  //Create Pagination section state variable
  const [ pageData, setPageData ] = useState([]);
  const [ page, setPage ] = useState(1); // First page = 1 
  const [ pageCount, setPageCount ] = useState(0);

  //Create Pagination- Next Button
  const handleNext = () => {
    if( page === pageCount ) return page;
    setPage(page + 1);
  }

  //Create Pagination - Previous button
  const handlePrevious = () => {
    if( page === 1) return page;
    setPage(page -1);
  }

  



  return (
    <div className='container'>
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
    
       <table  striped bordered hover>
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
      { /* --------Pagination --------------https://www.youtube.com/watch?v=qhtuXPDzfXA */ }
    <div className='d-flex justify-content-center'>
        <Pagination>          
              <Pagination.Prev onClick={handlePrevious}/>          

              <Pagination.Item>{10}</Pagination.Item>
            
              <Pagination.Next  onClick={handleNext}/>
        </Pagination>
    </div>
    </div>
  )

}

export default Products