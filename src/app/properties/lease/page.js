import PropertyList from '@/components/PropertyList';
import properties from '@/data/properties';
import '../../../styles/properties.css';

export default function LeasePropertiesPage() {
  const leaseProperties = properties.filter(property => property.status === 'lease');
  
  return (
    <div className="properties-page">
      <div className="container">
        <div className="properties-header">
          <h1>Properties for Lease</h1>
          <p>Luxury rental properties available now</p>
        </div>
        
        <PropertyList properties={leaseProperties} showFilters={false} />
      </div>
    </div>
  );
} 