import "./About.css";
import Footer from "../components/footer";

export default function About() {
  return (
    <div className="about-container">
      <h1>About Crystal Construction</h1>

      <div className="about-content">
        {/* Left Text */}
        <div className="about-text">
          <h2>Professional Construction & Interior Designing Company</h2>
          <p>
            Crystal Constructions is committed to your comfort from start to finish, every step of the way. 
            Our relation with you begins the first time you walk through our doors. From that time onwards, 
            our family takes care of your family. That is our Philosophy.
          </p>
          <p>
            Crystal is committed to building innovative, high-quality, functional, sustainable, and 
            value-for-money homes backed by superior architecture, technology, and prompt delivery. 
            We are dedicated to delivering homes that offer maximum satisfaction.
          </p>

          {/* Stats */}
          <div className="stats-container">
            <div className="stat-item">
              <h3>10+</h3>
              <p>Years In Business</p>
            </div>
            <div className="stat-item">
              <h3>250+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>270+</h3>
              <p>Projects Completed</p>
            </div>
          
          </div>
        </div>

        {/* Right Image */}
        <div className="about-image">
          <div className="image-box">
            <img
              src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=1200&q=80"
              alt="Crystal Construction"
            />
            <div className="image-overlay"></div>
          </div>
        </div>
      </div>
      
    </div>
  );
}
