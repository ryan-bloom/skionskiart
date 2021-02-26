import React from 'react';
import {Link} from 'react-scroll';
import './home.css'

export const Home = ()=>{
    const aboutMessage:string = 'As a die-hard ski junkie with a passion for art and a year long struggle to find a pair of skis with a graphic that I loved, I decided to take matters into my own hands. I painted my first pair of skis for myself, then a couple for my friends, and Ski-On Ski-Art was born. One of a kind, custom, hand-painted skis and boards designed with you and guaranteed to turn heads on the slopes. Reach out to talk about customizing yours today!';
    
    const spaceMan = './images/spaceMan.JPG';
    const deepSea = './images/deepSea.JPG';
    const elephant='./images/elephant.JPG';
    return(
        <div className="home-page-div">
            <div className="header-div">
                <h3 className="header-quote">
                    Custom - Hand Painted - One of a Kind Skis &amp; Snowboards
                </h3>
                <div className="header-nav-menu">
                    <button className="header-nav-button"><Link to="about" smooth={true}>about.</Link></button>
                    <button className="header-nav-button"><Link to="projects" smooth={true}>projects.</Link></button>
                    <button className="header-nav-button"><Link to="contact" smooth={true}>contact.</Link></button>
                </div>
            </div>
            <div className="about-div" id="about">
                <h1 className="section-header">about.</h1>
                <p className="section-content">{aboutMessage}</p>
            </div>
            <div className="paralax-image-2"></div>
            <div className="projects-div" id="projects">
                <h1 className="section-header">projects.</h1>
                <div className="projects-grid">
                    <div className="project-image-area">
                        <p className="project-image-title">Space Man</p>
                        <img className="project-image" id="space-man" src={spaceMan}/>
                    </div>
                    <div className="project-image-area">
                        <p className="project-image-title">Deep Sea</p>
                        <img className="project-image" id="space-man" src={deepSea}/>
                    </div>
                    <div className="project-image-area">
                        <p className="project-image-title">Elephant</p>
                        <img className="project-image" id="space-man" src={elephant}/>
                    </div>
                </div>
            </div>
            <div className="paralax-image-3"></div>
            <div className="contact-div" id="contact">
                <h1 className="section-header">contact.</h1>
                <h2 className="contact-blurb">Reach out via email or instagram to order your skis/board today!</h2>
                <div className="contact-info">
                    <a className="email-link" href={`mailto: skionskiart@gmail.com`}>Email: skionskiart@gmail.com</a>
                    <a className="instagram-link" href="https://www.instagram.com/skionskiart" target="_blank">Instagram: @skionskiart</a>
                </div>
            </div>
        </div>
    )
}