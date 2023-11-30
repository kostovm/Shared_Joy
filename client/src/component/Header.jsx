import { Link } from "react-router-dom";

export default function Header() {
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

                    <Link to="/your-offer">
                    <button>Your offers</button>
                    </Link>

                    <Link to="/about-us">
                    <button>About Us</button>
                    </Link>
                    
                    <Link to="/login">
                    <button>Login</button>
                    </Link>
                    
                    <Link to="/logout">
                    <button>Logout</button>
                    </Link>
                    
                    <Link to="/register">
                    <button>Register</button>
                    </Link>
                    
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