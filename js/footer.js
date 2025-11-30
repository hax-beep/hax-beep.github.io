// Modern Footer Component
document.addEventListener('DOMContentLoaded', function() {
    // Remove any existing footers
    const existingFooters = document.querySelectorAll('footer');
    existingFooters.forEach(footer => footer.remove());

    // Create footer HTML with wave design
    const footerHTML = `
    <footer class="moneta-footer">
        <div class="footer-wave">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512,52,583,67.3c66.2,13.8,136,14,198.3,0,41.8-9.6,80.9-23.8,112.7-40.9V0Z" opacity=".25" fill="#00aeef"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,141.56,72.3V0Z" opacity=".5" fill="#00aeef"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="#00aeef"></path>
            </svg>
        </div>
        <div class="footer-content">
            <div class="footer-main">
                <div class="footer-brand">
                    <div class="footer-logo">
                        <img src="./images/moneta-logo.png" alt="MONETA 2025" class="footer-logo-img">
                        <div class="footer-brand-text">
                            <h3>MONETA 2025</h3>
                            <p>India's Premier Financial Literacy Festival</p>
                        </div>
                    </div>
                    <div class="footer-social">
                        <a href="https://www.linkedin.com/company/moneta-podar/" target="_blank" class="social-btn" aria-label="LinkedIn">
                            <i class="fab fa-linkedin-in"></i>
                        </a>
                        <a href="https://www.instagram.com/podar.moneta/" target="_blank" class="social-btn" aria-label="Instagram">
                            <i class="fab fa-instagram"></i>
                        </a>
                    </div>
                </div>

                <div class="footer-links">
                    <div class="footer-column">
                        <h4 class="footer-title">Quick Links</h4>
                        <ul>
                            <li><a href="about.html"><i class="fas fa-chevron-right"></i> About Us</a></li>
                            <li><a href="events.html"><i class="fas fa-chevron-right"></i> Events</a></li>
                            <li><a href="speakers.html"><i class="fas fa-chevron-right"></i> Speakers</a></li>
                            <li><a href="team.html"><i class="fas fa-chevron-right"></i> Our Team</a></li>
                            <li><a href="blogs.html"><i class="fas fa-chevron-right"></i> Blogs</a></li>
                        </ul>
                    </div>

                    <div class="footer-column">
                        <h4 class="footer-title">Contact Us</h4>
                        <ul class="contact-info">
                            <li>
                                <i class="fas fa-envelope"></i>
                                <a href="mailto:podarmoneta.marketing@gmail.com">podarmoneta.marketing@gmail.com</a>
                            </li>
                            <li>
                                <i class="fas fa-phone-alt"></i>
                                <a href="tel:+919004116595">+91 90041 16595</a>
                            </li>
                            <li class="footer-newsletter">
                                <p>Subscribe to our newsletter</p>
                                <div class="newsletter-form">
                                    <input type="email" placeholder="Your email address">
                                    <button type="submit"><i class="fas fa-paper-plane"></i></button>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            
            <div class="footer-bottom">
                <p>&copy; 2025 MONETA - Podar International School. All rights reserved.</p>
                <div class="footer-legal">
                    <a href="privacy.html">Privacy Policy</a>
                    <span>|</span>
                    <a href="terms.html">Terms of Service</a>
                </div>
            </div>
        </div>
    </footer>
    `;

    // Add footer to the page
    document.body.insertAdjacentHTML('beforeend', footerHTML);

    // Add custom styles for the footer
    const style = document.createElement('style');
    style.textContent = `
        /* Footer Base Styles */
        .moneta-footer {
            background: #0a192f;
            color: #e6f1ff;
            position: relative;
            margin-top: 4rem;
            font-family: 'Inter', sans-serif;
        }

        .footer-wave {
            position: absolute;
            top: -50px;
            left: 0;
            width: 100%;
            overflow: hidden;
            line-height: 0;
        }

        .footer-wave svg {
            position: relative;
            display: block;
            width: calc(100% + 1.3px);
            height: 50px;
        }

        .footer-content {
            max-width: 1200px;
            margin: 0 auto;
            padding: 4rem 2rem 2rem;
        }

        .footer-main {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 3rem;
            margin-bottom: 3rem;
        }

        /* Brand Section */
        .footer-brand {
            padding-right: 2rem;
        }

        .footer-logo {
            display: flex;
            align-items: center;
            margin-bottom: 1.5rem;
        }

        .footer-logo-img {
            width: 60px;
            height: auto;
            margin-right: 1rem;
            border-radius: 8px;
            box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        }

        .footer-brand h3 {
            color: #00aeef;
            font-size: 1.5rem;
            margin: 0 0 0.25rem;
            font-weight: 700;
        }

        .footer-brand p {
            color: #a8b2d1;
            font-size: 0.9rem;
            margin: 0;
            line-height: 1.5;
        }

        /* Social Buttons */
        .footer-social {
            display: flex;
            gap: 1rem;
            margin-top: 1.5rem;
        }

        .social-btn {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.05);
            color: #e6f1ff;
            font-size: 1rem;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .social-btn:hover {
            background: #00aeef;
            color: white;
            transform: translateY(-3px);
            box-shadow: 0 5px 15px rgba(0, 174, 239, 0.3);
        }

        /* Links Section */
        .footer-links {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 2rem;
        }

        .footer-column h4 {
            color: #00aeef;
            font-size: 1.1rem;
            margin-bottom: 1.5rem;
            position: relative;
            padding-bottom: 0.75rem;
        }

        .footer-column h4::after {
            content: '';
            position: absolute;
            left: 0;
            bottom: 0;
            width: 40px;
            height: 2px;
            background: #00aeef;
        }

        .footer-column ul {
            list-style: none;
            padding: 0;
            margin: 0;
        }

        .footer-column li {
            margin-bottom: 0.8rem;
        }

        .footer-column a {
            color: #a8b2d1;
            text-decoration: none;
            transition: all 0.3s ease;
            display: flex;
            align-items: center;
            gap: 0.5rem;
        }

        .footer-column a i {
            font-size: 0.7rem;
            color: #00aeef;
            transition: transform 0.3s ease;
        }

        .footer-column a:hover {
            color: #00aeef;
            padding-left: 5px;
        }

        .footer-column a:hover i {
            transform: translateX(3px);
        }

        /* Contact Info */
        .contact-info li {
            display: flex;
            align-items: flex-start;
            margin-bottom: 1.2rem;
        }

        .contact-info i {
            color: #00aeef;
            margin-right: 1rem;
            margin-top: 0.25rem;
            font-size: 1.1rem;
            min-width: 20px;
        }

        .contact-info a {
            color: #a8b2d1;
            transition: color 0.3s ease;
        }

        .contact-info a:hover {
            color: #00aeef;
        }

        /* Newsletter */
        .footer-newsletter {
            margin-top: 2rem;
        }

        .footer-newsletter p {
            color: #a8b2d1;
            font-size: 0.9rem;
            margin-bottom: 0.75rem;
        }

        .newsletter-form {
            display: flex;
            background: rgba(255, 255, 255, 0.05);
            border-radius: 8px;
            overflow: hidden;
            border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .newsletter-form input {
            flex: 1;
            background: transparent;
            border: none;
            padding: 0.75rem 1rem;
            color: #e6f1ff;
            font-family: 'Inter', sans-serif;
        }

        .newsletter-form input::placeholder {
            color: #5e6a85;
        }

        .newsletter-form button {
            background: #00aeef;
            color: white;
            border: none;
            padding: 0 1.25rem;
            cursor: pointer;
            transition: background 0.3s ease;
        }

        .newsletter-form button:hover {
            background: #0095d1;
        }

        /* Footer Bottom */
        .footer-bottom {
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            padding-top: 2rem;
            text-align: center;
            display: flex;
            flex-direction: column;
            gap: 1rem;
        }

        .footer-bottom p {
            color: #5e6a85;
            font-size: 0.9rem;
            margin: 0;
        }

        .footer-legal {
            display: flex;
            justify-content: center;
            gap: 1rem;
            flex-wrap: wrap;
        }

        .footer-legal a {
            color: #5e6a85;
            text-decoration: none;
            font-size: 0.85rem;
            transition: color 0.3s ease;
        }

        .footer-legal a:hover {
            color: #00aeef;
        }

        .footer-legal span {
            color: #5e6a85;
        }

        /* Responsive Design */
        @media (max-width: 768px) {
            .footer-main {
                grid-template-columns: 1fr;
                gap: 2rem;
            }

            .footer-brand {
                padding-right: 0;
                text-align: center;
            }

            .footer-logo {
                justify-content: center;
            }

            .footer-social {
                justify-content: center;
            }

            .footer-column h4 {
                text-align: center;
            }

            .footer-column h4::after {
                left: 50%;
                transform: translateX(-50%);
            }

            .footer-newsletter {
                text-align: center;
            }

            .footer-links {
                grid-template-columns: 1fr;
                text-align: center;
            }

            .footer-column ul {
                display: flex;
                flex-direction: column;
                align-items: center;
            }

            .contact-info li {
                justify-content: center;
            }
        }

        /* Animation */
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-5px); }
            100% { transform: translateY(0px); }
        }

        .footer-logo-img {
            animation: float 4s ease-in-out infinite;
        }
    `;
    document.head.appendChild(style);

    // Add event listener for newsletter form
    const newsletterForm = document.querySelector('.newsletter-form');
    if (newsletterForm) {
        const input = newsletterForm.querySelector('input');
        const button = newsletterForm.querySelector('button');
        
        button.addEventListener('click', function(e) {
            e.preventDefault();
            if (input.value && input.value.includes('@')) {
                alert('Thank you for subscribing to our newsletter!');
                input.value = '';
            } else {
                alert('Please enter a valid email address');
            }
        });
        
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                e.preventDefault();
                button.click();
            }
        });
    }
});
