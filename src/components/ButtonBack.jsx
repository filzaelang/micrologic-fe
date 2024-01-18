import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const ButtonBack = () => {
    return (
        <Link to="/" className="btn btn-outline-primary mb-3 btn-lg">
            Back
        </Link>
    )
}

export default ButtonBack;