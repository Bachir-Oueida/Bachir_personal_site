'use client';

import { useState } from 'react';
import PropertyCard from './PropertyCard';

export default function PropertyList({ properties, showFilters = false }) {
  const [filteredProperties, setFilteredProperties] = useState(properties);
  const [activeFilter, setActiveFilter] = useState('all');
  const [sortBy, setSortBy] = useState('price-desc');

  const handleFilterChange = (filter) => {
    setActiveFilter(filter);
    let filtered = properties;

    if (filter !== 'all') {
      filtered = properties.filter(property => property.status === filter);
    }

    setFilteredProperties(filtered);
  };

  const handleSortChange = (sort) => {
    setSortBy(sort);
    let sorted = [...filteredProperties];

    switch (sort) {
      case 'price-asc':
        sorted.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        sorted.sort((a, b) => b.price - a.price);
        break;
      case 'area-asc':
        sorted.sort((a, b) => a.area - b.area);
        break;
      case 'area-desc':
        sorted.sort((a, b) => b.area - a.area);
        break;
      default:
        break;
    }

    setFilteredProperties(sorted);
  };

  return (
    <div className="property-list">
      {showFilters && (
        <div className="property-filters">
          <div className="filter-group">
            <label>Filter by Status:</label>
            <div className="filter-buttons">
              <button 
                className={activeFilter === 'all' ? 'active' : ''}
                onClick={() => handleFilterChange('all')}
              >
                All
              </button>
              <button 
                className={activeFilter === 'sale' ? 'active' : ''}
                onClick={() => handleFilterChange('sale')}
              >
                For Sale
              </button>
              <button 
                className={activeFilter === 'sold' ? 'active' : ''}
                onClick={() => handleFilterChange('sold')}
              >
                Sold
              </button>
              <button 
                className={activeFilter === 'lease' ? 'active' : ''}
                onClick={() => handleFilterChange('lease')}
              >
                For Lease
              </button>
            </div>
          </div>

          <div className="sort-group">
            <label>Sort by:</label>
            <select value={sortBy} onChange={(e) => handleSortChange(e.target.value)}>
              <option value="price-desc">Price: High to Low</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="area-desc">Area: Largest First</option>
              <option value="area-asc">Area: Smallest First</option>
            </select>
          </div>
        </div>
      )}

      <div className="properties-grid">
        {filteredProperties.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>

      {filteredProperties.length === 0 && (
        <div className="no-properties">
          <p>No properties found matching your criteria.</p>
        </div>
      )}
    </div>
  );
} 