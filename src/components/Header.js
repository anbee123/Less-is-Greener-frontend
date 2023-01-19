import { Link } from "react-router-dom"


function Header(props) {
    return (
    <header>
         <Link to={`/`}><img id = "logo" src="/logo.png"alt="icon"/></Link>
         
         <nav>
         <Link to={`/`}>Home</Link>
         <Link to={`/lessisgreener`}>Ideas</Link>
         <Link to={`/lessisgreener/add`}>Add Ideas</Link>
         </nav>
    </header>
    )
  }
  
  export default Header;