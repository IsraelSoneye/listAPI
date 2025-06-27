import { Link } from "react-router-dom";

const NotFound = () => {
    return ( 
        <div className="not-found">
            <h3>Sorry, page requested is not found!</h3>
            <Link to ='/'><button>Return to homepage</button></Link>
        </div>
     );
}
 
export default NotFound;