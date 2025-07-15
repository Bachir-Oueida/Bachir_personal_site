import Image from "next/image";
import communitiesData from "../data/communities";
import "../styles/communities.css";

export default function Communities() {
  return (
    <div className="communities-grid">
      <div key="0" className="community-item" style={{backgroundColor: "black"}}>
        <div className="text-content">
            <h3>Communities</h3>
            <a href="/communities">View All</a>
        </div>
      </div>
      {communitiesData.map((community, index) => (
        <div key={index} className="community-item">
          <Image
            src={community.image}
            alt={community.title}
            className="community-image"
          />
          <div className="overlay"></div>
          <div className="text-content">
            <h3>{community.title}</h3>
            <p>{community.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
