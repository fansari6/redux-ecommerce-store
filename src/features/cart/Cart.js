import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart } from './cartSlice';
import Styles from './Cart.module.css';

function Cart() {
  const cart = useSelector((state) => state.cart) || { items: [] };
  const dispatch = useDispatch();

  const handleRemoveFromCart = (itemId) => {
    dispatch(removeFromCart(itemId));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const cartTotal = cart.items.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div>
      <div className={Styles.cart}>
        <h2>Cart</h2>
      </div>
      {cart && cart.items && cart.items.length > 0 ? (
        <div className={Styles.centerTable}>
          <table>
            <thead>
              <tr>
                <th className={Styles.tableColumn1Heading}>Item</th>
                <th className={Styles.tableColumn2Heading}>Price</th>
                <th className={Styles.tableColumn3Heading}>Quantity</th>
                <th className={Styles.tableColumn4Heading}>Extended Price</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {cart.items.map((item) => (
                <tr key={item.id}>
                  <td className={Styles.tableColumn1Data}>{item.title}</td>
                  <td className={Styles.tableColumn2Data}>${item.price}</td>
                  <td className={Styles.tableColumn3Data}>{item.quantity}</td>
                  <td className={Styles.tableColumn4Data}>
                    ${(item.price * item.quantity).toFixed(2)}
                  </td>
                  <td>
                    <button
                      className={Styles.removeFromCartBtn}
                      onClick={() => handleRemoveFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
              <tr>
                <td></td>
                <td></td>
                <td style={{ textAlign: 'right' }}>
                  <strong>Total</strong>
                </td>
                <td style={{ textAlign: 'right', paddingRight: '10px' }}>
                  <strong>${cartTotal.toFixed(2)}</strong>
                </td>
                <td>
                  <button
                    className={Styles.removeFromCartBtn}
                    onClick={() => handleClearCart()}
                  >
                    Clear Cart
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <p style={{ fontSize: '21px', textAlign: 'center' }}>
          Your cart is empty!
        </p>
      )}
    </div>
  );
}

export default Cart;
