import React, { useState, useEffect } from 'react';
import '../styles/PackagesSection.css';

const PackagesSection = () => {
  const [packages, setPackages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPackages = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/packages');
        if (!response.ok) {
          throw new Error('Failed to fetch packages');
        }
        const data = await response.json();
        setPackages(data.packages);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchPackages();
  }, []);

  if (loading) {
    return <div className="packages-section">Loading packages...</div>;
  }

  if (error) {
    return <div className="packages-section">Error: {error}</div>;
  }

  return (
    <section className="packages-section" id="packages">
      <h2>Dream Destinations</h2>
      <p className="section-subtitle">Where Luxury Meets Adventure</p>
      
      <div className="packages-container">
        {packages.map((pkg, index) => (
          <div className="package-card" key={index}>
            <div className="card-image">
              <img src={pkg.image} alt={pkg.destination} loading="lazy" />
              <div className="duration-badge">{pkg.duration}</div>
            </div>
            <div className="card-content">
              <h3>{pkg.destination}</h3>
              <p className="price">From {pkg.price}</p>
              <p className="description">{pkg.description}</p>
              <button className="book-button">Book Now</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PackagesSection; 