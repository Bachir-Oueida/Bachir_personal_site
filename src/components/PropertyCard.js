import Link from "next/link";
import Image from "next/image";

const STATUS_BADGES = {
  sale: { text: "For Sale", class: "sale" },
  sold: { text: "Sold", class: "sold" },
  lease: { text: "For Lease", class: "lease" },
  leased: { text: "Leased", class: "leased" },
  "coming-soon": { text: "Coming Soon", class: "coming-soon" },
};

export default function PropertyCard({ property }) {
  const formatPrice = (price) => {
    if (!price) return "";
    const formatted = Number(price).toLocaleString();
    if (property.status === "lease") {
      return `$${formatted}/month`;
    }
    return `$${formatted}`;
  };

  const statusBadge = STATUS_BADGES[property.status] || STATUS_BADGES.sale;
  const isComingSoon = property.status === "coming-soon";
  const hasImage = property.images && property.images.length > 0;
  const excerpt = property.description
    ? property.description.length > 120
      ? `${property.description.substring(0, 120)}...`
      : property.description
    : "";

  return (
    <div className="property-card">
      <Link href={`/properties/${property.id}`}>
        <div className="property-image-container">
          {hasImage ? (
            <Image
              src={property.images[0]}
              alt={property.title}
              width={400}
              height={300}
              className="property-image"
            />
          ) : (
            <div className="property-image-placeholder">Photos coming soon</div>
          )}
          <div className={`status-badge ${statusBadge.class}`}>
            {statusBadge.text}
          </div>
        </div>

        <div className="property-info">
          <h3 className="property-title">{property.title}</h3>

          {isComingSoon ? (
            property.address ? (
              <p className="property-address">{property.address}</p>
            ) : null
          ) : (
            <>
          {property.banner ? (
            <p className="listing-banner">{property.banner}</p>
          ) : (
            <p className={`property-price ${!property.price ? "invisible" : ""}`}>
              {formatPrice(property.price)}
            </p>
          )}

          {property.address ? (
            <p className="property-address">{property.address}</p>
          ) : null}

          <div className="property-details">
            {property.area ? (
              <div className="detail-item">
                <span className="detail-label">Area:</span>
                <span className="detail-value">
                  {Number(property.area).toLocaleString()} sq ft
                </span>
              </div>
            ) : null}
            {property.bedrooms ? (
              <div className="detail-item">
                <span className="detail-label">Bedrooms:</span>
                <span className="detail-value">{property.bedrooms}</span>
              </div>
            ) : null}
            {property.bathrooms ? (
              <div className="detail-item">
                <span className="detail-label">Bathrooms:</span>
                <span className="detail-value">{property.bathrooms}</span>
              </div>
            ) : null}
          </div>

          {excerpt ? (
            <div className="property-description">
              <p>{excerpt}</p>
            </div>
          ) : null}

          {property.features && property.features.length > 0 && (
            <div className="property-features">
              {property.features.slice(0, 3).map((feature, index) => (
                <span key={index} className="feature-tag">
                  {feature}
                </span>
              ))}
              {property.features.length > 3 && (
                <span className="feature-tag more">
                  +{property.features.length - 3} more
                </span>
              )}
            </div>
          )}
            </>
          )}
        </div>
      </Link>
    </div>
  );
}
