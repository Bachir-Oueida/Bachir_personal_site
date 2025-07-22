import PropertyList from '@/components/PropertyList';
import properties from '@/data/properties';

export default function SoldPropertiesPage() {
  const soldProperties = properties.filter(property => property.status === 'sold');
  
  return (
    <div className="properties-page">
      <div className="container">
        <div className="properties-header">
          <h1>Sold Properties</h1>
          <p>Recently sold luxury properties</p>
        </div>
        
        <PropertyList properties={soldProperties} showFilters={false} />
      </div>
    </div>
  );
} 