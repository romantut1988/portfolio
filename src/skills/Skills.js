import React from 'react';
import style from './Skills.module.css';
import styleContainer from './../common/style/Container.module.css';
import Skill from "./skill/Skill";

function Skills() {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Skills</h2>
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
