// Footer component - creates and injects footer HTML
function createFooter() {
  const footerHTML = `
    <footer>
      <div class="footer-content">
        <!-- Footer Main Content -->
        <div class="footer-main">
          <div class="footer-column">
            <h3>About EIEI</h3>
            <p class="footer-tagline">The Education Institute for Early Intervention – Nurturing young minds with excellence.</p>
            <div class="footer-stats">
              <div class="stat">
                <div class="stat-number">500+</div>
                <div class="stat-label">Children Served</div>
              </div>
              <div class="stat">
                <div class="stat-number">20+</div>
                <div class="stat-label">Expert Educators</div>
              </div>
              <div class="stat">
                <div class="stat-number">15+</div>
                <div class="stat-label">Programs</div>
              </div>
            </div>
          </div>

          <div class="footer-column">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="index.html">Home</a></li>
              <li><a href="index.html#about">About Us</a></li>
              <li><a href="services.html">Services</a></li>
              <li><a href="career-opportunities.html">Careers</a></li>
              <li><a href="contact-us.html">Contact</a></li>
            </ul>
          </div>

          <div class="footer-column">
            <h3>Programs</h3>
            <ul>
              <li><a href="services.html">Early Intervention</a></li>
              <li><a href="services.html">Special Education</a></li>
              <li><a href="services.html">Parent Training</a></li>
              <li><a href="services.html">Classroom Support</a></li>
              <li><a href="services.html">Professional Development</a></li>
            </ul>
          </div>

          <div class="footer-column newsletter-column">
            <h3>📧 Subscribe for Updates</h3>
            <p class="newsletter-tagline">Get the latest news and updates from EIEI!</p>
            <form class="newsletter-form" onsubmit="handleNewsletterSignup(event)">
              <div class="newsletter-input-wrapper">
                <input type="email" placeholder="Your email address" required class="newsletter-input">
                <button type="submit" class="newsletter-btn">✨ Subscribe</button>
              </div>
              <p class="newsletter-note">We respect your privacy. No spam!</p>
            </form>
          </div>
        </div>

        <!-- Footer Social & Admin -->
        <div class="footer-bottom">
          <div class="footer-left">
            <p>&copy; 2025 EIEI Services. All rights reserved.</p>
            <div class="footer-links">
              <a href="#" title="Privacy Policy">Privacy Policy</a> | 
              <a href="#" title="Terms of Service">Terms of Service</a> | 
              <a href="admin-programs.html" title="Admin Portal" class="admin-link">Admin Portal</a>
            </div>
          </div>
          <div class="footer-social">
            <h4>Follow Us</h4>
            <div class="social-icons">
              <a href="#" title="Facebook" class="social-icon">f</a>
              <a href="#" title="Instagram" class="social-icon">📷</a>
              <a href="#" title="LinkedIn" class="social-icon">in</a>
              <a href="#" title="YouTube" class="social-icon">▶</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  `;
  return footerHTML;
}
