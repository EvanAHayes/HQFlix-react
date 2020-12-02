import React from 'react';
import styles from './Footer.module.css'

const footer = () => (
    <footer className={styles.footer}>
    <div className="container">
        <div className="row">
        <div className="col-6 col-sm-4 col-md-3">
                <h6 className="footer__title">Resources</h6>
                <ul className="footer__list">
                    <li><a href="/">About Us</a></li>
                    <li><a href="/">Pricing Plan</a></li>
                    <li><a href="/">Help</a></li>
                </ul>
            </div>
         
            <div className="col-6 col-sm-4 col-md-3">
                <h6 className="footer__title">Legal</h6>
                <ul className="footer__list">
                    <li>Terms of Use</li>
                    <li>Privacy Policy</li>
                    <li>Security</li>
                </ul>
            </div>
          
            <div className="col-12 col-sm-4 col-md-3">
                <h6 className="footer__title">Contact</h6>
                <ul className="footer__list">
                    <li><a href="tel:+18002345678">+1 (555) 555-5555</a></li>
                    <li><a href="mailto:hayesevan@rocketmail.com">support@HQflixs.com</a></li>
                </ul>
                <ul className="footer__social">
                    <li className="facebook"><a href="/"><i className="fab fa-facebook-square"></i></a></li>
                    <li className="instagram"><a href="/"><i className="fab fa-instagram"></i></a></li>
                    <li className="twitter"><a href="/"><i className="fab fa-twitter"></i></a></li>
                </ul>
            </div>
            
            <div className="col-12">
                <div className={styles.footer__copyright}>
                    <small>© 2019 HQflix. Create by Evan Hayes</small>

                    <ul>
                        <li>Terms of Use</li>
                        <li>Privacy Policy</li>
                        <li>This product uses the TMDb API but is not endorsed or certified by TMDb.</li>
                    </ul>
                </div>
            </div>
        
        </div>
    </div>
</footer>
)

export default footer;