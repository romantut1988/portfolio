import React from 'react';
import styleContainer from '../common/styles/Container.module.css';
import style from './Projects.module.css';
import Project from './project/Project';
import Title from '../common/components/title/Title';




function Projects() {
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Project'}/>
                <div className={style.projects}>
                    <Project title={'Social network'} description={'sed do eismod tempor incudidunt ut labore et delore magna aliqua Ut enim...'}/>
                    <Project title={'Todo list'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;