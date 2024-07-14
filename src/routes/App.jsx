import { Link, NavLink } from "react-router-dom"

function App() {
  

  return (
    <>
      <div>
      <Link activeStyle={{  backgroundColor: '#fdc936'  }} to={'/products'}>Products</Link> | 
      <Link activeStyle={{  backgroundColor: '#fdc936'  }} to={'/users'}> Users</Link> | 
       <NavLink activeStyle={{  backgroundColor: '#fdc936'  }} to={'/'}>Home</NavLink>
      < br />
      </div>
    </>
  )
}

export default App
