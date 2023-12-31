import { useContext, useState } from "react";
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from "react-router-dom";
import { setSearchTerm } from "../../redux/actions";
import AuthContext from "../../contexts/authContext";
import styles from './Header.module.css';

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
            navigate('/products');
            setSearchTermLocal('');
        }
    };

    return (
        <>
            <div className={styles.navbar}>
                <div>
                    <Link to="/">
                        <img src="/images/logo.png" alt="Logo" className={styles.logoImage} />
                    </Link>
                </div>

                <div className={styles.navButtons}>

                    <Link to='/products'>
                        <button>Продукти</button>
                    </Link>

                    <Link to="/about-us">
                        <button>За нас</button>
                    </Link>

                    {!isAuthenticated && (
                        <>
                            <Link to="/login">
                                <button>Вход</button>
                            </Link>

                            <Link to="/register">
                                <button>Регистрация</button>
                            </Link>
                        </>
                    )}

                    {isAuthenticated && (
                        <>
                            <Link to="/logout">
                                <button>Изход</button>
                            </Link>

                            <span> | {username}</span>

                        </>
                    )}

                </div>

                {isAuthenticated && (
                    <Link to="/create">
                        <button className={styles.createButton}>&#127873; Създай</button>
                    </Link>
                )}

                <div className={styles.searchBar}>
                    <input
                        type="text"
                        placeholder="Търси..."
                        value={searchTerm}
                        onChange={(e) => setSearchTermLocal(e.target.value)}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') {
                                handleSearch();
                            }
                        }}
                    />
                    <button className={styles.roundButton} onClick={handleSearch}>
                        <img src="/images/loupe.png" alt="Icon" className={styles.roundButtonImage} />
                    </button>
                </div>
            </div>
        </>
    )
}