import "../styles/HeroSection.css";
import backgroundVideo from "../assets/banner.mp4"; // Make sure to add your video to this path

const HeroSection = () => {
  const scrollToPackages = () => {
    document.getElementById('packages').scrollIntoView({ 
      behavior: 'smooth'
    });
  };

  return (
    <section className="hero-section">
      <div className="website-logo">TravelAdvisor</div>
      <video className="hero-video" autoPlay loop muted>
        <source src={backgroundVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-content">
        <h1>Feel the Wanderlust</h1>
        <p>Discover amazing experiences and possibilities</p>
        <button className="cta-button" onClick={scrollToPackages}>
          Explore Packages
        </button>
      </div>
    </section>
  );
};

export default HeroSection;
