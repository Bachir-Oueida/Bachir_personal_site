import Image from "next/image";
import "../styles/featuredArticle.css";

export default function FeaturedArticle() {
  return (
    <div className="featured-article ">
      <div className="featured-article-image relative">
        <Image
          src="/images/bg-century.png"
          alt="Featured Article"
          width={800}
          height={600}
        />
        <div className="featured-article-overlay"></div>
        <div className="featured-article-content text-center">
          <h2>BACHIR OUEIDA&apos;S $20M IS CENTURY CITY&apos;S PRICIEST SALE</h2>
          <a href="#" className="global-btn-white">Read More</a>
        </div>
      </div>
    </div>
  );
}
