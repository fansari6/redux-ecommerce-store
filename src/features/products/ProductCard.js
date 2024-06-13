import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../cart/cartSlice';
import { Link, useNavigate } from 'react-router-dom';
import AddToCartModal from '../cart/AddToCartModal';
import Styles from './Products.module.css';

function ProductCard({ product }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isModalOpen, setIsModalOpen] = useState(false);

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

  return (
    <div className={Styles.productCard}>
      <Link to={`/product/${product.id}`} className={Styles.productLink}>
        <img
          src={product.image}
          alt={product.title}
          className={Styles.productCardImg}
        />
        <h3>{product.title}</h3>
        <p>${product.price}</p>
      </Link>
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
  );
}

export default ProductCard;
