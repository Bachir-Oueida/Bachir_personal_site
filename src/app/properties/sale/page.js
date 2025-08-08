import PropertyList from '@/components/PropertyList';
import properties from '@/data/properties';
import '../../../styles/properties.css';

export default function SalePropertiesPage() {
  const saleProperties = properties.filter(property => property.status === 'sale');
  
  return (
    <div className="properties-page">
      <div className="container">
        <div className="properties-header">
          <h1>Properties for Sale</h1>
          <p>Find your dream home from our exclusive collection</p>
        </div>
        
        <PropertyList properties={saleProperties} showFilters={false} />
      </div>
    </div>
  );
} 