import PropertyDetail from '@/components/PropertyDetail';
import properties from '@/data/properties';
import { notFound } from 'next/navigation';
import "../../../styles/properties.css";

export default function PropertyDetailPage({ params }) {
  const property = properties.find(p => p.id === parseInt(params.id));
  
  if (!property) {
    notFound();
  }
  
  return (
    <div className="property-detail-page">
      <PropertyDetail property={property} />
    </div>
  );
}

// Generate static params for all properties
export async function generateStaticParams() {
  return properties.map((property) => ({
    id: property.id.toString(),
  }));
} 