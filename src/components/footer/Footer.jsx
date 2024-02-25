import React from "react";
import {
    FaFacebookF,
    FaInstagram,
    FaTelegram,
    FaGithub,
} from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";

import "./style.scss";

const Footer = () => {
    return (
        <footer className="footer">
            <ContentWrapper>
                <ul className="menuItems">
                    <li className="menuItem">Terms Of Use</li>
                    <li className="menuItem">Privacy-Policy</li>
                    <li className="menuItem">About</li>
                    <li className="menuItem">Blog</li>
                    <li className="menuItem">FAQ</li>
                </ul>
                <div className="infoText">
                    Palpy - Movies
                    Copyright by : Muhammad Noval Supriyadi 
                </div>
                <div className="socialIcons">
                    <a href="https://www.facebook.com/profile.php?id=61552372177539" target="blank" className="icon">
                        <FaFacebookF />
                    </a>
                    <a href="https://www.instagram.com/nopalspryd" target="blank" className="icon">
                        <FaInstagram />
                    </a>
                    <a href="https://t.me/Palpyx" className="icon">
                        <FaTelegram />
                    </a>
                    <a href="https://github.com/ValSpp" className="icon">
                        <FaGithub />
                    </a>
                </div>
            </ContentWrapper>
        </footer>
    );
};

export default Footer;
