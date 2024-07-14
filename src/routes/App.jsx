import { Link } from "react-router-dom"

function App() {
  

  return (
    <>
      <div><h2>This is Home Page</h2>
        <Link to={'/products'}>Products</Link> | 
        <Link to={'/users'}>Users</Link>
      </div>
    </>
  )
}

export default App
