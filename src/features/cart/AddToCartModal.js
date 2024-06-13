import React from 'react';
import Modal from 'react-modal';
import Styles from './Cart.module.css';

function AddToCartModal({
  isOpen,
  onRequestClose,
  onContinueShopping,
  onGoToCart,
}) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      style={{
        overlay: {
          backgroundColor: 'rgba(0,0,0,0.5)',
        },
        content: {
          width: '400px',
          height: '150px',
          margin: 'auto',
          border: '1px solid #ccc',
          padding: '20px',
        },
      }}
    >
      <h2>Item added to cart</h2>
      <p>Go to cart or continue shopping?</p>
      <div className={Styles.btns}>
        <button onClick={onContinueShopping} className={Styles.modalBtn}>
          Continue Shopping
        </button>
        <button onClick={onGoToCart} className={Styles.modalBtn}>
          Go to cart
        </button>
      </div>
    </Modal>
  );
}

export default AddToCartModal;
