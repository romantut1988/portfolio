import React from 'react';
import style from './Main.module.css';
import Particles from 'react-particles-js';

function Main() {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greeting}>
                <span>Hi There</span>
                    <span>I am Roman<span>Amialkovich</span></span>
                <h1>Web.</h1>
                </div>
                <div className={style.photo}>
                    <div className={style.image}>

                    </div>
                </div>

            </div>
        </div>
    );
}

export default Main;
