import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/style/Container.module.css';
import Skill from "./skill/Skill";
import reactIcon from './assets/img/react-icon.svg';
import jsIcon from './assets/img/js-icon.svg';
import htmlIcon from './assets/img/html-icon.svg';
import Fade from 'react-reveal/Fade';



function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'Html'} description={'Lorem lorem lorem lorem lorem lorem lorem lorem lorem...'}/>
                    <Skill title={'Css'} description={'Lorem lorem lorem lorem lorem lorem lorem lorem lorem ,'}/>
                    <Skill title={'Bootstrap'} description={'Lorem lorem lorem lorem lorem lorem lorem lorem lorem.'}/>
                </div>
            </div>
        </div>
    );
}

export default Skills;
