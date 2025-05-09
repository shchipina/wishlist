import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import WishlistPage from './pages/Wishlist';
import { WishlistProvider } from './context/WishlistContext';
import ProductCard from './components/ProductCard';

const productsRoot = document.getElementById('wishlist-products-root');
if (productsRoot) {
  const productCards = document.querySelectorAll('.wishlist-product-card');
  productCards.forEach((card) => {
    const product = {
      productId: card.getAttribute('data-product-id') || '',
      title: card.getAttribute('data-product-title') || '',
      details: card.getAttribute('data-product-details') || '',
    };
    const root = document.createElement('div');
    card.appendChild(root);
    ReactDOM.createRoot(root).render(
      <WishlistProvider>
        <ProductCard product={product} />
      </WishlistProvider>
    );
  });
}

const wishlistRoot = document.getElementById('wishlist-root');
if (wishlistRoot) {
  ReactDOM.createRoot(wishlistRoot).render(
    <React.StrictMode>
      <WishlistProvider>
        <WishlistPage />
      </WishlistProvider>
    </React.StrictMode>
  );
}