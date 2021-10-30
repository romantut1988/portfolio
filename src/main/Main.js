import React from 'react';
import style from './Main.module.css';
import styleContainer from './../common/style/Container.module.css';


function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.text}></div>
                <span>Hi There</span>
                <h1>I am Jefferay Aaron</h1>
                <p>Frontend Developer.</p>
                <div className={style.photo}></div>
            </div>
        </div>

    );
}

export default Main;
