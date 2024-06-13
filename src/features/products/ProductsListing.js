import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProducts } from './ProductAPI';
import ProductCard from './ProductCard';
import Styles from './Products.module.css';

function ProductsListing() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  return (
    <div className={Styles.productListing}>
      {products && products.length > 0 ? (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <p>No products available</p>
      )}
      <h3>Products Listing</h3>
    </div>
  );
}

export default ProductsListing;
