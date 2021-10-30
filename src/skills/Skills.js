import React from 'react';
import styleContainer from './../common/style/Container.module.css';
import style from './Skills.module.css';
import Skill from "./skill/Skill";
import Title from "../common/components/title/Title";



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
