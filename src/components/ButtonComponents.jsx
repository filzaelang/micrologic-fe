import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonComponents = ({ to, label }) => {
    return (
        <Link to={to}>
            <button className="btn btn-primary mb-3" style={{ width: '200px', height: '50px' }}>
                {label}
            </button>
        </Link>
    )
}

export default ButtonComponents;