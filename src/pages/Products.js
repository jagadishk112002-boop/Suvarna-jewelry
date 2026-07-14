import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Filter, Star } from 'lucide-react';
import './Products.css';

function Products() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    { id: 1, name: 'Gold Necklace', price: 15000, category: 'necklace', rating: 4.8, image: '👑' },
    { id: 2, name: 'Diamond Earrings', price: 25000, category: 'earrings', rating: 5, image: '💎' },
    { id: 3, name: 'Bridal Set', price: 50000, category: 'set', rating: 4.9, image: '💍' },
    { id: 4, name: 'Silver Bracelet', price: 8000, category: 'bracelet', rating: 4.7, image: '✨' },
    { id: 5, name: 'Pearl Necklace', price: 12000, category: 'necklace', rating: 4.6, image: '🌸' },
    { id: 6, name: 'Gold Bangles', price: 18000, category: 'bracelet', rating: 4.8, image: '💫' },
    { id: 7, name: 'Gemstone Ring', price: 20000, category: 'ring', rating: 4.9, image: '💠' },
    { id: 8, name: 'Traditional Anklet', price: 6000, category: 'anklet', rating: 4.5, image: '⭐' },
  ];

  const categories = [
    { value: 'all', label: 'All Products' },
    { value: 'necklace', label: 'Necklaces' },
    { value: 'earrings', label: 'Earrings' },
    { value: 'bracelet', label: 'Bracelets' },
    { value: 'ring', label: 'Rings' },
  ];

  const filteredProducts = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="products-page">
      <div className="container">
        <h1>Our Collections</h1>
        
        {/* Sidebar */}
        <div className="products-layout">
          <aside className="sidebar">
            <div className="filter-section">
              <h3><Filter size={18} /> Filters</h3>
              <div className="category-filter">
                <h4>Category</h4>
                {categories.map(cat => (
                  <label key={cat.value} className="filter-option">
                    <input
                      type="radio"
                      value={cat.value}
                      checked={selectedCategory === cat.value}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                    />
                    <span>{cat.label}</span>
                  </label>
                ))}
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-grid-section">
            <div className="grid grid-3">
              {filteredProducts.map(product => (
                <Link to={`/products/${product.id}`} key={product.id} className="product-card">
                  <div className="product-image">{product.image}</div>
                  <div className="product-info">
                    <h3>{product.name}</h3>
                    <div className="product-rating">
                      <Star size={14} fill="currentColor" />
                      <span>{product.rating}</span>
                    </div>
                    <p className="product-price">₹{product.price.toLocaleString()}</p>
                    <button className="btn btn-primary" style={{ width: '100%' }}>Add to Cart</button>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
