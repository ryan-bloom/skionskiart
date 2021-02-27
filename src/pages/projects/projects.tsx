import './projects.css'
import {useLocation, withRouter} from 'react-router-dom';
import projects from '../../config/projects.json';
import { Routes } from '../../routes';
import { useEffect } from 'react';

interface projectMeta {
    project_id:string,
    project_title: string,
    project_image_url:string,
    project_info: string
}

const allProjects : projectMeta[] = projects.projects;

export const Projects = withRouter((props) =>{
    const urlQuery = new URLSearchParams(useLocation().search);
    const selectedProject:projectMeta | undefined= allProjects.find(val => val.project_id === urlQuery.get('projectid'));
    const projectImage = `./images/${selectedProject?.project_image_url}`;

    if(selectedProject === undefined){
        props.history.push(Routes.home);
    }

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return(
        <div className="projects-page-div">
            <div className="projects-header-div">
                MY PROJECTS - {selectedProject?.project_info}
            </div>
            <div className="projects-page-content-div">
                <h1>{selectedProject?.project_title}</h1>
                <div className="project-page-info">
                    {}
                </div>
                <img className="project-page-image" src={projectImage}/>
            </div>
        </div>
    )
});