import {Link} from 'react-router-dom'


const Navbar = () => {
    return (  
        <nav className="navbar">
        <h1>The modern blog </h1>
        <div className="links">
         <Link to ="/">Home</Link>     {/* instead of anchor tag we use Link tag, coz if we use anchor tag the requst will go to server which we not prefer, so if we use link tag the request will go to router. */}
        <Link to ="/create">New Blog</Link> 
        </div>
        </nav>
    );
}
 
export default Navbar;