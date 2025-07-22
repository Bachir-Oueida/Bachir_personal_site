import Link from 'next/link';
import Image from 'next/image';

export default function PropertyCard({ property }) {
  const formatPrice = (price) => {
    if (property.status === 'lease') {
      return `$${price.toLocaleString()}/month`;
    }
    return `$${price.toLocaleString()}`;
  };

  const getStatusBadge = (status) => {
    const badges = {
      sale: { text: 'For Sale', class: 'sale' },
      sold: { text: 'Sold', class: 'sold' },
      lease: { text: 'For Lease', class: 'lease' }
    };
    return badges[status] || badges.sale;
  };

  const statusBadge = getStatusBadge(property.status);

  return (
    <div className="property-card">
      <Link href={`/properties/${property.id}`}>
        <div className="property-image-container">
          <Image
            src={property.images[0]}
            alt={property.title}
            width={400}
            height={300}
            className="property-image"
          />
          <div className={`status-badge ${statusBadge.class}`}>
            {statusBadge.text}
          </div>
        </div>
        
        <div className="property-info">
          <h3 className="property-title">{property.title}</h3>
          <p className="property-price">{formatPrice(property.price)}</p>
          <p className="property-address">{property.address}</p>
          
          <div className="property-details">
            <div className="detail-item">
              <span className="detail-label">Area:</span>
              <span className="detail-value">{property.area.toLocaleString()} sq ft</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Bedrooms:</span>
              <span className="detail-value">{property.bedrooms}</span>
            </div>
            <div className="detail-item">
              <span className="detail-label">Bathrooms:</span>
              <span className="detail-value">{property.bathrooms}</span>
            </div>
          </div>
          
          <div className="property-description">
            <p>{property.description.substring(0, 120)}...</p>
          </div>
          
          <div className="property-features">
            {property.features.slice(0, 3).map((feature, index) => (
              <span key={index} className="feature-tag">{feature}</span>
            ))}
            {property.features.length > 3 && (
              <span className="feature-tag more">+{property.features.length - 3} more</span>
            )}
          </div>
        </div>
      </Link>
    </div>
  );
} 