import { useContext, useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { setSearchTerm } from "../../redux/actions";
import AuthContext from "../../contexts/authContext";
import Path from "../../paths";

export default function Header() {

    const {
        isAuthenticated,
        username
    } = useContext(AuthContext);

    const [searchTerm, setSearchTermLocal] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate();


    const handleSearch = (e) => {
        if (searchTerm.trim() !== '') {
            dispatch(setSearchTerm(searchTerm));
            navigate(Path.Catalog);
            setSearchTermLocal('');
        }
    };

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

                {isAuthenticated && (
                    <Link to="/create">
                        <button className="create-button">Create</button>
                    </Link>
                )}

                <div className="search-bar">
                    <input
                        type="text"
                        placeholder="Search..."
                        value={searchTerm}
                        onChange={(e) => setSearchTermLocal(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                    <button className="round-button" onClick={handleSearch}>
                        <img src="/images/loupe.png" alt="Icon" className="round-button-image" />
                    </button>
                </div>
            </div>
        </>
    )
}