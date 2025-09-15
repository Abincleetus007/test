import './About.css';

export default function About() {
  return (
    <div className="about-container">
      <h1>About c Construction</h1>
      <div className="about-content">
        <div className="about-text">
          <h2>Professional Construction & Interior Designing Company</h2>
          <p>
            crystal CONSTRUCTIONS is committed to your comfort from start to finish, every step of the way. 
            Our relation with you begins the first time you walk through our doors. From that time onwards 
            our family takes care of your family. That is our Philosophy.
          </p>
          <p>
            crystal is committed to build innovative high quality, functional, sustainable and value for money 
            homes backed by superior architecture technology and construction and prompt delivery for customers. 
            We are dedicated to delivery homes that offer maximum satisfaction and value for money.
          </p>
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
            <div className="stat-item">
              <h3>150+</h3>
              <p>Trained Staff</p>
            </div>
          </div>
        </div>
        
        <div className="about-image">
          <div className="image-placeholder">
            <i className="fas fa-building"></i>
          </div>
        </div>
      </div>
    </div>
  );
}