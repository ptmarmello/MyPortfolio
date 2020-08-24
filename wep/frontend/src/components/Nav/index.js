import React from 'react';
import './styles.css';
import {Link} from 'react-router-dom';
import ProfilePic from '../../assets/img/img3.jpg';
import {FiInstagram, FiTwitter,FiLinkedin, FiGithub,FiYoutube,FiMic, FiSlack,  FiAward} from 'react-icons/fi';

export default function NavBar(){
    return(
        <div className="App-Navbar">
            <div className="profile-frame">
                <img src={ProfilePic} alt="Yeah This is Real, This is Me" className="profile-picture"/>
                <div className="profile-name">Pedro Thiago</div>                
            </div>
            <section className="nav-menu">
                <ul className="menu-items">
                    <Link to="/about" className="item" >About Me</Link>
                    <Link to="/projects" className="item" >Projects</Link>
                    {/* <Link to="/webversion" className="item" >WebVersion</Link> */}
                    {/* <Link to="/contact" className="item" >Contact</Link> */}
                    {/* <Link to="/skills" className="item" >Skills</Link> */}
                </ul>

                
            </section>
            <div className="down">
                {/* <div className="profile-title">Student, Fullstack, Musician and Hungry </div> */}
                <div className="profile-box">
                    <FiLinkedin/>
                    <FiInstagram />
                    <FiTwitter/>
                    <FiGithub/>
                </div>
                
            </div>


        </div>
    );
}