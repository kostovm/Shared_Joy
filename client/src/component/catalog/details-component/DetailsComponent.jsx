import { useContext, useEffect, useState } from 'react';
import * as productService from '../../../services/productService';
import AuthContext from '../../../contexts/authContext';

export default function DetailsComponent({ productId }) {
    const { userId, isAuthenticated } = useContext(AuthContext);
    const [product, setProduct] = useState({});
    const [requestedBy, setRequestedBy] = useState([]);

    useEffect(() => {
        if (productId !== '') {
            productService.getOne(productId)
                .then((result) => {
                    setProduct(result);
                    if (Array.isArray(result.requestedBy)) {
                        setRequestedBy(result.requestedBy);
                    }
                });
        }
    }, [productId]);

    const isOwner = userId === product._ownerId
    const requestedByUser = requestedBy.some((requester) => requester.requesterId === userId);
    const stars = Array.from({ length: product.condition }, (_, index) => (
        <span key={index} className="star">&#9733;</span>
      ));

    return (
        <>
            {productId !== '' && (
                <div className="custom-component">
                    {/* First Part */}
                    <div className="first-part">
                        <div className="image-part">
                            <img
                                src={product.imageUrl}
                                alt="Product Image"
                                className="product-image"
                            />
                        </div>
                        <div className="text-fields">
                            <p className="bigger-text">{product.productName}</p>
                            <p className="smaller-text">{product.city}</p>
                        </div>
                        <div className="star-part">
                            <h5>Състояние</h5>
                            {stars}
                        </div>
                    </div>

                    {/* Third Part */}
                    <div className="third-part">
                        <p>Количество: {product.quantity}</p>
                        <p>Описание на продукта: {product.description}</p>
                        {isOwner && (
                            <div className="requests">
                                <p>Потребители, които искат това:</p>
                                {requestedBy.map((requester, index) => (
                                    <div key={index}>
                                        <p>
                                            <a href='#'>{requester.username}</a>
                                        </p>
                                    </div>
                                ))}
                            </div>
                        )}
                        <div className="buttons-container">
                            {isAuthenticated ? (
                                isOwner ? (
                                    <>
                                        <button>Edit</button>
                                        <button>Remove</button>
                                    </>
                                ) : (
                                    <button>{requestedByUser ? 'Cancel Request' : 'Request'}</button>
                                )
                            ) : (
                                <p>Login to request this item</p>
                            )}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}