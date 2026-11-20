import PropertyList from '@/components/PropertyList';
import properties from '@/data/properties';
import '../../../styles/properties.css';

export default function ComingSoonPropertiesPage() {
  const comingSoonProperties = properties.filter(property => property.status === 'coming-soon');

  return (
    <div className="properties-page">
      <div className="container">
        <div className="properties-header">
          <h1>Coming Soon</h1>
          <p>Residences that are not yet on the market</p>
        </div>

        <PropertyList properties={comingSoonProperties} showFilters={false} />
      </div>
    </div>
  );
}
