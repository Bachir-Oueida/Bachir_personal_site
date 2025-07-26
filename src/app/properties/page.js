import PropertyList from '@/components/PropertyList';
import properties from '@/data/properties';
import "../../styles/properties.css";

export default function PropertiesPage() {
  return (
    <>
    <div className="properties-page">
      <div className="container">
        <div className="properties-header">
          <h1>All Properties</h1>
          <p>Discover our exclusive collection of luxury properties</p>
        </div>
        
        <PropertyList properties={properties} showFilters={true} />
      </div>
    </div>
    </>
  );
} 