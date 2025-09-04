import { Link } from "react-router-dom";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">
            Transform Your Digital{" "}
            <span className="gradient-text">Experience</span>
          </h1>
          <p className="hero-description">
            Discover innovative solutions that empower your business to thrive
            in the modern digital landscape. We combine cutting-edge technology
            with exceptional design.
          </p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">
              Get Started
            </Link>
            <Link to="/about" className="btn btn-secondary">
              Learn More
            </Link>
          </div>
        </div>
        <div className="hero-visual">
          <div className="floating-card card-1">
            <div className="card-icon">🚀</div>
            <h4>Fast Performance</h4>
          </div>
          <div className="floating-card card-2">
            <div className="card-icon">🎨</div>
            <h4>Beautiful Design</h4>
          </div>
          <div className="floating-card card-3">
            <div className="card-icon">🔒</div>
            <h4>Secure & Reliable</h4>
          </div>
          <div className="main-visual">
            <div className="dashboard-preview">
              <div className="dashboard-header"></div>
              <div className="dashboard-content">
                <div className="chart"></div>
                <div className="stats">
                  <div className="stat"></div>
                  <div className="stat"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <h2 className="section-title">Why Choose Us</h2>
          <p className="section-subtitle">
            Experience the difference with our innovative solutions
          </p>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Lightning Fast</h3>
              <p>
                Optimized performance that ensures your applications run
                smoothly and efficiently.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🎯</div>
              <h3>Precision Engineered</h3>
              <p>
                Every component is carefully crafted for optimal functionality
                and user experience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure by Design</h3>
              <p>
                Built with security as a priority, protecting your data and your
                users' privacy.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">📱</div>
              <h3>Fully Responsive</h3>
              <p>
                Perfect experience across all devices, from mobile to desktop
                and everything between.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🌍</div>
              <h3>Global Scale</h3>
              <p>
                Infrastructure designed to handle growth and serve users around
                the world.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">💡</div>
              <h3>Innovative Solutions</h3>
              <p>
                Stay ahead of the curve with cutting-edge technology and
                forward-thinking design.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>500+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="stat-item">
              <h3>99.9%</h3>
              <p>Uptime Guarantee</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Support Available</p>
            </div>
            <div className="stat-item">
              <h3>1M+</h3>
              <p>Users Served</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Transform Your Business?</h2>
            <p>
              Join thousands of satisfied customers who have already experienced
              the difference.
            </p>
            <Link to="/contact" className="btn btn-large">
              Start Your Journey Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
