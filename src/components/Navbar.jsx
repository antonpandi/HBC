
import { Link } from 'react-router-dom'
import logo from '../assets/images/logo.png'

export default function Navbar(){
    return(
    
    <div className="container ">
        <nav className="nav">
            <Link to="/"  className="nav-item">  <img src={logo} alt="" /> </Link>
            <Link to="/" className="nav-item"> <h3>Home</h3> </Link>
            <Link to="/turnaments" className="nav-item"><h3>Turnaments</h3></Link>
            <Link to="/about" className="nav-item"><h3>Om oss</h3></Link>
            <Link to="/login" className="nav-item"><h3>Login</h3></Link>
        </nav>
    </div>
    )
}