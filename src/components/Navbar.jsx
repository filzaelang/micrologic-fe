import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import ButtonBack from "./ButtonBack";

const Navbar = () => {
    return (
        <div style={{ marginTop: "40px", marginLeft: "40px" }}>
            <ButtonBack />
        </div>
    )
}

export default Navbar;