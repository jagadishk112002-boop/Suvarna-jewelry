import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { Star, Heart, Share2 } from 'lucide-react';
import './ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id,
    name: 'Premium Gold Necklace',
    price: 15000,
    rating: 4.8,
    reviews: 234,
    image: '👑',
    description: 'A stunning handcrafted gold necklace featuring traditional Indian design. Perfect for any occasion.',
    details: {
      material: '22K Gold',
      weight: '15.5g',
      design: 'Traditional',
      warranty: '2 Years',
    },
  };

  const handleAddToCart = () => {
    console.log(`Added ${quantity} of product ${id} to cart`);
  };

  return (
    <div className="product-detail">
      <div className="container">
        <div className="detail-layout">
          <div className="product-image-section">
            <div className="product-large-image">{product.image}</div>
          </div>

          <div className="product-details-section">
            <h1>{product.name}</h1>
            
            <div className="rating-section">
              <div className="stars">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill={i < Math.floor(product.rating) ? 'currentColor' : 'none'} />
                ))}
              </div>
              <span>{product.rating} ({product.reviews} reviews)</span>
            </div>

            <div className="price-section">
              <h2>₹{product.price.toLocaleString()}</h2>
              <p className="availability">In Stock</p>
            </div>

            <p className="description">{product.description}</p>

            <div className="product-specs">
              <h3>Product Details</h3>
              <table>
                <tbody>
                  {Object.entries(product.details).map(([key, value]) => (
                    <tr key={key}>
                      <td className="spec-key">{key.charAt(0).toUpperCase() + key.slice(1)}</td>
                      <td className="spec-value">{value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="purchase-section">
              <div className="quantity-selector">
                <label>Quantity:</label>
                <div className="quantity-input">
                  <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>−</button>
                  <input type="number" value={quantity} readOnly />
                  <button onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>

              <div className="action-buttons">
                <button className="btn btn-primary" onClick={handleAddToCart}>
                  Add to Cart
                </button>
                <button className="btn btn-outline">
                  <Heart size={18} />
                </button>
                <button className="btn btn-outline">
                  <Share2 size={18} />
                </button>
              </div>
            </div>

            <div className="shipping-info">
              <p>✓ Free shipping on orders over ₹5000</p>
              <p>✓ 30-day money-back guarantee</p>
              <p>✓ Authenticity certified</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
