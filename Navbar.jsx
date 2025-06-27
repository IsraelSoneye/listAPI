import { Link } from 'react-router-dom';

const Navbar = () => {
    return ( 
        <div className="navbar">
            <h1>IOS Institute</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="" style={{
                    color: "white",
                    backgroundColor: "#f1356d",
                    borderRadius: "8px"
                }}>New Blog</Link>
            </div>
        </div>
     );
}
 
export default Navbar;