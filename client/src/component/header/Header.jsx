import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../../contexts/authContext";

export default function Header() {

    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <Link to="/">
                        <img src="/images/logo.png" alt="Logo" className="logo-image" />
                    </Link>
                </div>

                <div className="nav-buttons">

                    <Link to="/products">
                        <button>Products</button>
                    </Link>

                    {isAuthenticated && (
                        <Link to="/your-offer">
                            <button>Your offers</button>
                        </Link>
                    )}

                    <Link to="/about-us">
                        <button>About Us</button>
                    </Link>

                    {!isAuthenticated && (
                        <>
                            <Link to="/login">
                                <button>Login</button>
                            </Link>

                            <Link to="/register">
                                <button>Register</button>
                            </Link>
                        </>
                    )}

                    {isAuthenticated && (
                        <>
                            <Link to="/logout">
                                <button>Logout</button>
                            </Link>

                            <span> | {username}</span>

                        </>
                    )}

                </div>
                <div className="search-bar">
                    <input type="text" placeholder="Search..." />
                    <button className="round-button">
                        <img src="/images/loupe.png" alt="Icon" className="round-button-image" />
                    </button>
                </div>
            </div>
        </>
    )
}