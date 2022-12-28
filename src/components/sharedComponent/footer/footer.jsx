import React from 'react';
import '../footer/footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook,faGithub,faTwitter} from '@fortawesome/free-brands-svg-icons'


const Footer=()=> {
    
        return (
            <div className='footer-container'>
                <footer className="footer-mynetflix">
                    <div className="container">                       
                            <div className="social-group-icon">                               
                                <FontAwesomeIcon icon={faTwitter} className="social-icon"/>
                                <FontAwesomeIcon icon={faGithub} className="social-icon"/>                         
                                <FontAwesomeIcon icon={faFacebook} className="social-icon"/>                         
                            </div>
                            <p>Copyright © 2017 - GnSoluciones</p>                    
                    </div>
                </footer>
            </div>
        );
    }


export default Footer;
