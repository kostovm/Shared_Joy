import { useContext, useEffect, useState } from 'react';
import * as productService from '../../../services/productService';
import * as requestService from '../../../services/requestService'
import AuthContext from '../../../contexts/authContext';
import UserInfoModal from '../../user-info-modal/UserInfoModal';
import MapComponent from '../../map-component/MapComponent';
import { Link, useNavigate } from 'react-router-dom';
import styles from './DetailsComponent.module.css';

export default function DetailsComponent({ productId, onChange }) {
    const { userId, username, email, phoneNumber, imageUrl, isAuthenticated } = useContext(AuthContext);
    const [selectedRequesterId, setSelectedRequesterId] = useState(null);
    const [product, setProduct] = useState({});
    const [showUserInfoModal, setShowInfoModal] = useState(false);
    const [requesterInfo, setRequesterInfo] = useState({});
    const [requests, setRequests] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Clear previous error state
                setError(null);
    
                const productResult = await productService.getOne(productId);
                setProduct(productResult);
    
                const requestsResult = await requestService.getRequests(productId);
                setRequests(requestsResult);
                setShowInfoModal(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError('Error fetching data. Please try again later.');
                const redirectTimeout = setTimeout(() => {
                    navigate('/products');
                }, 5000);
    
                return () => {
                    clearTimeout(redirectTimeout);
                };
            } finally {
                setLoading(false);
            }
        };
    
        if (productId !== '') {
            fetchData();
        }
    }, [productId, navigate]);

    const isOwner = userId === product._ownerId;

    const stars = Array.from({ length: product.condition }, (_, index) => (
        <span key={index} className={styles.star}>&#9733;</span>
    ));

    const clickUserInfoHandler = (requester) => {
        setRequesterInfo(requester);
        setSelectedRequesterId(requester.requesterId);
        setShowInfoModal(true);
    };

    const requestedByUser = Object.values(requests).some((requester) => requester.requesterId === userId);

    const clickRequestHandler = async () => {
        if (!requestedByUser) {
            const userInfo = {
                requesterId: userId,
                username,
                email,
                phoneNumber,
                imageUrl,
            };

            await requestService.addRequest(productId, userInfo);
            setRequests([...requests, userInfo]);
            onChange(productId, "update");
            navigate(`/products/${productId}`)
        } else {
            await requestService.removeRequest(productId, userId);
            const updatedRequests = requests.filter((requester) => requester.requesterId !== userId);
            setRequests(updatedRequests);
            onChange(productId, "update");
            navigate(`/products/${productId}`)
        }
    };

    const deleteButtonClickHandler = async () => {
        const hasConfirmed = window.confirm('Are you sure you want to delete this product?');
    
        if (hasConfirmed) {
            await productService.remove(productId);
            onChange(productId, "delete");  

            navigate('/products');
        }
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>{error}</div>;
    }

    return (
        <>
            {productId !== '' && (
                <div className={styles.customComponent}>
                    <div className={styles.firstPart}>
                        <div className={styles.imagePart}>
                            <img
                                src={product.imageUrl}
                                alt="Product Image"
                                className={styles.productImage}
                            />
                        </div>
                        <div className={styles.textFields}>
                            <p className={styles.biggerText}>{product.productName}</p>
                            <p className={styles.smallerText}>{product.city}</p>
                        </div>
                        <div className={styles.starPart}>
                            <h5>Състояние</h5>
                            {stars}
                        </div>
                    </div>

                    <div className={styles.thirdPart}>
                        <p>Количество: {product.quantity}</p>
                        <p>Описание на продукта: {product.description}</p>
                        {isOwner && (
                            <div className={styles.requests}>
                                <p>Потребители, които искат това:</p>
                                {requests.map((requester) => (
                                    <div key={requester.requesterId}>
                                        <p>
                                            <button
                                                className={styles.showInfoButton}
                                                onClick={() => clickUserInfoHandler(requester)}
                                            >
                                                &#9742; {requester.username}
                                            </button>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}

                        {showUserInfoModal && (
                            <UserInfoModal
                                onClick={() => {
                                    setShowInfoModal(false);
                                    setSelectedRequesterId(null);
                                }}
                                requesterInfo={requesterInfo}
                            />
                        )}
                        <div className={styles.buttonsContainer}>
                            {isAuthenticated ? (
                                isOwner ? (
                                    <>
                                        <Link to={`/edit/${productId}`} state={{ productInfo: product }}>
                                            <button>Edit</button>
                                        </Link>
                                        <button onClick={deleteButtonClickHandler}>Remove</button>
                                    </>
                                ) : (
                                    <button onClick={clickRequestHandler}>
                                        {requestedByUser ? 'Cancel Request' : 'Request'}
                                    </button>
                                )
                            ) : (
                                <p>Login to request this item</p>
                            )}
                        </div>
                        {isAuthenticated && !isOwner && (
                            <MapComponent {...product} />
                        )}
                    </div>
                </div>
            )}
        </>
    );
}