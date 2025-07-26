import CommunityDetail from '@/components/CommunityDetail';
import communitiesData from '@/data/communities';
import { notFound } from 'next/navigation';

export default async function CommunityPage({ params }) {
  // Convert slug back to title format for matching
  const { slug } = await params;
  const communityTitle = slug
    .split('-')
    .map(word => word.toUpperCase())
    .join(' ');
  
  const community = communitiesData.find(c => c.title === communityTitle);
  
  if (!community) {
    notFound();
  }
  
  return (
    <div className="community-page">
      <CommunityDetail community={community} />
    </div>
  );
}

// Generate static params for all communities
export async function generateStaticParams() {
  return communitiesData.map((community) => ({
    slug: community.title.toLowerCase().replace(/\s+/g, '-'),
  }));
} 