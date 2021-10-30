import React from 'react';
import styleContainer from './../common/styles/Container.module.css';
import style from './Projects.module.css';
import Skill from "./projects/Projects";

function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <h2 className={style.title}>Projects</h2>
                <div className={style.projects}>
                    <Projects title={'Social network'} desccription={'sed do eismod tempor incudidunt ut labore et delore magna aliqua Ut enim...'}/>
                    <Projects title={'Todo list'} desccription={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;