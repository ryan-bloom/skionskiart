import React, { useEffect } from 'react';
import {Link} from 'react-scroll';
import './home.css'
import {withRouter} from 'react-router-dom';
import { Routes } from '../../routes';

export const Home = withRouter((props) =>{
    const urlHash = props.history.location.hash;
    const aboutMessage:string = 'As a die-hard ski junkie with a passion for art and a year long struggle to find a pair of skis with a graphic that I loved, I decided to take matters into my own hands. I painted my first pair of skis and Ski-On Ski-Art was born. One-of-a-kind, custom, hand-painted skis and boards guaranteed to turn heads on the slopes.';
    const missionMessage:string= 'Our climate has quickly become another passion of mine. With climate change growing more and more dangerous, our ski seasons are at greater risk than ever before. To help protect our environment and our ski seasons, Ski-On Ski-Art is donating 10% of all profits made from commissioned work to the NRDC (National Resource Defense Council).';

    const spaceMan = './images/spaceMan.JPG';
    const deepSea = './images/deepSea.JPG';
    const elephant='./images/elephant.JPG';
    const kicksinorbit='./images/kicksInOrbit.JPG';

    const handleProjectSelect = (projectId:string) =>{
        props.history.push(`${Routes.projects}?projectid=${projectId}`);
    }
    useEffect(()=>{
        if(urlHash.length > 0){
            document.getElementById(urlHash.substr(1,urlHash.length-1))?.scrollIntoView();
        }
    },[urlHash]);

    return(
        <div className="home-page-div">
            <div className="header-div">
                <p className="header-title">Ski-On Ski-Art</p>
                <h3 className="header-quote">
                    One-of-a-Kind, Custom, Hand-Painted Skis &amp; Snowboards
                </h3>
                <div className="header-nav-menu">
                    <button className="header-nav-button"><Link to="about" smooth={true}>about.</Link></button>
                    <button className="header-nav-button"><Link to="projects" smooth={true}>projects.</Link></button>
                    <button className="header-nav-button"><Link to="contact" smooth={true}>contact.</Link></button>
                </div>
            </div>
            <div className="about-div" id="about">
                <h1 className="section-header">about.</h1>
                <p className="section-content">{aboutMessage} <Link className="in-text-link" to="contact" smooth={true}>Reach out</Link> to customize yours today!</p>
                <hr/>
                <p className="section-content">{missionMessage} Click <a className="in-text-link" href="https://www.nrdc.org/" target="_blank">here</a> to learn more about the NRDC and it's mission!</p>
            </div>
            <div className="paralax-image-2"></div>
            <div className="projects-div" id="projects">
                <h1 className="section-header">projects.</h1>
                <div className="projects-grid">
                    <div className="project-image-area" onClick={() => handleProjectSelect('spaceman')}>
                        <p className="project-image-title">Space Man</p>
                        <img className="project-image" id="space-man" src={spaceMan} alt="spaceman"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('deepsea')}>
                        <p className="project-image-title">Deep Sea</p>
                        <img className="project-image" id="deep-sea" src={deepSea} alt="deepsea"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('elephant')}>
                        <p className="project-image-title">Elephant</p>
                        <img className="project-image" id="elephant" src={elephant} alt="elephant"/>
                    </div>
                    <div className="project-image-area" onClick={() => handleProjectSelect('kicksinorbit')}>
                        <p className="project-image-title">Kicks in Orbit</p>
                        <img className="project-image" id="kicks-in-orbit" src={kicksinorbit} alt="kicksinorbit"/>
                    </div>
                </div>
            </div>
            <div className="paralax-image-3"></div>
            <div className="contact-div" id="contact">
                <h1 className="section-header">contact.</h1>
                <h2 className="contact-blurb">Reach out via email or instagram to customize your skis/board today!</h2>
                <div className="contact-info">
                    <p className="contact-info-p">Email:<a className="email-link" href={`mailto: skionskiart@gmail.com`}>skionskiart@gmail.com</a></p>
                    <p className="contact-info-p">Instagram:<a className="instagram-link" href="https://www.instagram.com/skionskiart" target="_blank">@skionskiart</a></p>
                    <p className="contact-info-p"><a className="stickers-order-form" href="https://forms.gle/Uhvib7Ct3ZYXPZTE9" target="_blank">Click here to get your Ski-On Ski-Art stickers!</a></p>
                </div>
            </div>
        </div>
    )
});