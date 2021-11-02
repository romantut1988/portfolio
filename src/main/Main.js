import React from 'react';
import style from './Main.module.scss';
import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';



const particlesOptions = {
    particles: {
        number: {
            value:80,
            density: {
                enable: true,
                value_area: 800
            }
        }
    }
};

function Main() {
    return (
        <div className={style.mainBlock}>
            <Particles className={style.particles} params={particlesOptions} />
            <Fade top>
            <div className={style.container}>
                <div className={style.greeting}>
                <span>Hi There</span>
                    <span>I am Roman<span>Amialkovich</span></span>
                <h1>Web.</h1>
                <ReactTypingEffect
                    text='Web'.
                />
                </div>
                <div className={style.photo}>
                    <div className={style.image}>

                    </div>
                </div>
            </div>
            </Fade>
        </div>
    );
}

export default Main;
