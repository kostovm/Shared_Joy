export default function Header() {
    return (
        <>
            <div className="navbar">
                <div className="logo">
                    <img src="/images/logo.png" alt="Logo" className="logo-image" />
                </div>
                <div className="nav-buttons">
                    <button>Products</button>
                    <button>About Us</button>
                    <button>Login</button>
                    <button>Logout</button>
                    <button>Register</button>
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