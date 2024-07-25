import { Link, NavLink } from "react-router-dom"

function App() {
  

  return (
    <>
      <div>
      <Link  to={'/products'}>Products</Link> | 
      <Link  to={'/users'}> Users</Link> | 
       <NavLink  to={'/'}>Home</NavLink>
      < br />
      </div>
    </>
  )
}

export default App
