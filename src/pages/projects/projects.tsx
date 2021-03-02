import './projects.css'
import {useLocation, withRouter} from 'react-router-dom';
import projects from '../../config/projects.json';
import { Routes } from '../../routes';
import { useEffect } from 'react';

interface projectMeta {
    project_id:string,
    project_title: string,
    project_number: number,
    project_image_url:string,
    project_info: string,
    project_blurb: string
}

const allProjects : projectMeta[] = projects.projects;

export const Projects = withRouter((props) =>{
    const urlQuery = new URLSearchParams(useLocation().search);
    const selectedProject:projectMeta | undefined= allProjects.find(val => val.project_id === urlQuery.get('projectid'));
    const projectImage = `./images/${selectedProject?.project_image_url}`;

    if(selectedProject === undefined){
        props.history.push(Routes.home);
    }

    const handleHeaderNav=(section: string):void =>{
        props.history.push(`${Routes.home}#${section}`)
    }

    const handleSideNavClick = (path: string):void =>{
        props.history.push(`${Routes.projects}?projectid=${path}`);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="projects-page-div">
            <div className="projects-header-div">
                <img onClick={()=> props.history.push(Routes.home)} src="../../images/logo_blk.PNG" alt="SOSA" className="home-logo"/>
                <div className="projects-header-nav-menu">
                    <button className="projects-header-nav-button" onClick={()=>handleHeaderNav('about')}>about.</button>
                    <button className="projects-header-nav-button" onClick={()=>handleHeaderNav('projects')}>projects.</button>
                    <button className="projects-header-nav-button" onClick={()=>handleHeaderNav('contact')}>contact.</button>
                </div>
            </div>
            <div className="project-page-body">
                <div className="project-page-sideNav">
                    <img onClick={() => handleSideNavClick('spaceman')} src="../../images/bw_spaceMan.PNG" alt="spaceman-nav" className="project-nav-image"/>
                    <img onClick={() => handleSideNavClick('deepsea')} src="../../images/bw_deepSea.PNG" alt="deepsea-nav" className="project-nav-image"/>
                    <img onClick={() => handleSideNavClick('elephant')} src="../../images/bw_elephant.PNG" alt="elephant-nav" className="project-nav-image"/>
                </div>
                <div className="projects-page-content-div">
                    <div className="project-page-info">
                        <h2 className="project-title">{`${selectedProject?.project_title}. project ${selectedProject?.project_number}`}</h2>
                        <p className="project-info">{`${selectedProject?.project_info}`}</p>
                    </div>
                    <img className="project-page-image" src={projectImage} alt={`${selectedProject?.project_title}`}/>
                </div>
            </div>
        </div>
    )
});