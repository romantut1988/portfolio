import React from 'react';
import style from './Project.module.css';




function Project(props) {
    return(
        <div className={style.project}>
            <div className={style.image}>
                <a className={style.viewBtn}>Смотреть</a>
            </div>
            <h3>{props.title}</h3>
            <span className={style.descriprion}>{props.description}</span>
        </div>
    );
}

export default Project;

