import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { addToCart } from '../cart/cartSlice';
import AddToCartModal from '../cart/AddToCartModal';
import ProductRating from './ProductRating';
import Styles from './Products.module.css';

function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((response) => response.json())
      .then((data) => setProduct(data))
      .catch((error) => console.log('Error fetching product', error));
  }, [id]);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setIsModalOpen(true);
  };

  const handleContinueShopping = () => {
    setIsModalOpen(false);
    navigate('/');
  };

  const handleGoToCart = () => {
    setIsModalOpen(false);
    navigate('/cart');
  };

  if (!product) {
    return <div>Loading...</div>;
  }
  return (
    <div style={{ marginLeft: '50px', marginTop: '25px' }}>
      <h2 style={{ fontSize: '31px', marginBottom: '10px' }}>
        <strong>Product Details</strong>
      </h2>
      <p style={{ fontSize: '21px', marginBottom: '20px' }}>
        <strong>Product ID: </strong>
        {product.id}
      </p>
      <div style={{ display: 'flex' }}>
        <div style={{ flex: '1', marginRight: '30px' }}>
          <img
            src={product.image}
            alt={product.title}
            style={{
              borderRadius: '15px',
              borderStyle: 'solid',
              borderWidth: '1px',
            }}
          ></img>
        </div>
        <div style={{ flex: '2' }}>
          <p style={{ fontSize: '24px', marginRight: '50px' }}>
            <strong>Product Name: </strong>
            {product.title}
          </p>
          <p
            style={{
              fontSize: '18px',
              paddingTop: '10px',
              marginRight: '50px',
            }}
          >
            <strong>Product Description: </strong> {product.description}
          </p>
          <p style={{ fontSize: '18px', paddingTop: '18px' }}>
            <strong>Product Category: </strong>
            {product.category}
          </p>
          <span style={{ display: 'flex', alignItems: 'center' }}>
            <span style={{ fontSize: '18px' }}>
              <strong>Product Rating: </strong>
            </span>
            <span style={{ marginLeft: '5px' }}>
              <ProductRating rating={product.rating.rate} />
            </span>
            <span style={{ marginLeft: '5px', fontSize: '18px' }}>
              ({product.rating.rate})
            </span>
          </span>
          <p style={{ fontSize: '18px' }}>
            <strong>Number of Ratings: </strong>
            {product.rating.count}
          </p>
          <button onClick={handleAddToCart} className={Styles.addToCartBtn}>
            Add to cart
          </button>

          <AddToCartModal
            isOpen={isModalOpen}
            onRequestClose={() => setIsModalOpen(false)}
            onContinueShopping={handleContinueShopping}
            onGoToCart={handleGoToCart}
          />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
