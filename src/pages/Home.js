import React from 'react';
import { Link } from 'react-router-dom';
import { Star, Truck, Shield, Award } from 'lucide-react';
import './Home.css';

function Home() {
  const featuredProducts = [
    { id: 1, name: 'Gold Necklace', price: 15000, image: '👑', rating: 4.8 },
    { id: 2, name: 'Diamond Earrings', price: 25000, image: '💎', rating: 5 },
    { id: 3, name: 'Bridal Set', price: 50000, image: '💍', rating: 4.9 },
    { id: 4, name: 'Silver Bracelet', price: 8000, image: '✨', rating: 4.7 },
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1>Welcome to SUVARNA</h1>
          <p>Discover timeless elegance and authentic Indian jewelry</p>
          <Link to="/products" className="btn btn-primary">Shop Now</Link>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="features-grid">
            <div className="feature-card">
              <Truck size={40} />
              <h3>Free Shipping</h3>
              <p>On orders over ₹5000</p>
            </div>
            <div className="feature-card">
              <Shield size={40} />
              <h3>Secure Payment</h3>
              <p>100% secure transactions</p>
            </div>
            <div className="feature-card">
              <Award size={40} />
              <h3>Certified Jewels</h3>
              <p>Authenticity guaranteed</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <h2>Featured Collections</h2>
          <div className="grid grid-4">
            {featuredProducts.map(product => (
              <Link to={`/products/${product.id}`} key={product.id} className="product-card">
                <div className="product-image">{product.image}</div>
                <div className="product-info">
                  <h3>{product.name}</h3>
                  <div className="product-rating">
                    <Star size={16} fill="currentColor" />
                    <span>{product.rating}</span>
                  </div>
                  <p className="product-price">₹{product.price.toLocaleString()}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <h2>Exclusive Offers</h2>
          <p>Get up to 30% off on selected items this season</p>
          <Link to="/products" className="btn btn-secondary">View All Offers</Link>
        </div>
      </section>
    </div>
  );
}

export default Home;
