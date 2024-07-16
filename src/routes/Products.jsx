import React, { useEffect, useState } from 'react';
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

  //Create a Drop Down Section
  const handleUserPerPageChange = (e) =>{
      setPageCount(Number(e.target.value));
      setPage(setPageCount);
  }
  
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

  useEffect(() => {
      const pageDataCount = Math.ceil(products.products.length / 10);
      setPageCount(pageDataCount);

      if(page){
        const LIMIT = 10;
        const SKIP = LIMIT * page;
        const dataSkip = products.products.slice(page === 1 ? 0 : SKIP - LIMIT, SKIP);
        setPageData(dataSkip);        
      }
  }, [products]);

  return (
    <div className='container'>
      <Link to={'/products'}>Products</Link> | 
      <Link to={'/users'}> Users</Link> | 
       <NavLink to={'/'}>Home</NavLink>
      < br />
      {/** Select Number of page to be shown in Table */}

      <label htmlFor="usersPerPage">Product per page: </label>
      <select id="usersPerPage" value={pageCount} onChange={handleUserPerPageChange}>
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={20}>20</option>
        <option value={30}>30</option>
      </select>
    
       <table className="striped bordered hover">
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

          { pageData.length > 0 ? pageData.map((user) => (
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
          )) : <tr className='d-flex justify-content-center mt-4'>
                <td>Loading... <Spinner animation="border" variant='danger' /></td> 
              </tr>}
        </tbody>
      </table>

{ /* --------Pagination --------------https://www.youtube.com/watch?v=qhtuXPDzfXA */ }

        <div className='d-flex justify-content-center mt-5'>
            <Pagination>          
                  <Pagination.Prev onClick={handlePrevious}  disabled={page === 1}/>          

                  {
                    Array(pageCount).fill(null).map((items, index) => {
                      return (
                        <>
                          <Pagination.Item active = {page === index + 1 ? true : false}
                          onClick={() => {setPage(index + 1)}}>
                             {index + 1}
                            </Pagination.Item>
                        </>
                      )
                    })
                    
                    }
                
                  <Pagination.Next  onClick={handleNext} disabled={page === pageCount}/>
            </Pagination>
        </div>
    </div>
  )

}

export default Products