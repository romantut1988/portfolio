import React from 'react';
import styleContainer from '../common/style/Container.module.css';
import style from './Projects.module.scss';
import Project from './project/Project';
import Title from '../common/components/title/Title';
import todoImage from './../assets/image/contacts.png'
import socialImage from './../assets/image/contacts.png'



function Projects() {
    const social = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    };
    const todolist = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`,
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Project'}/>
                <div className={style.projects}>
                    <Project style={social} title={'Social network'} description={'sed do eismod tempor incudidunt ut labore et delore magna aliqua Ut enim...'}/>
                    <Project style={todolist} title={'Todo list'} description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit,'}/>
                </div>
            </div>
        </div>
    );
}

export default Projects;