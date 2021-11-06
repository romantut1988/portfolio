import React from 'react';
import style from './Main.module.scss';
// import Particles from 'react-particles-js';
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt';



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

            <Fade top>
            <Tilt className={style.container}>
                <div className={style.greeting}>
                <span>Hi There</span>
                    <span>I am Roman<span>Amialkovich</span></span>
                <h1>Web.</h1>
                <ReactTypingEffect
                    text='Web.' speed='3s'
                />
                </div>
                    <Tilt className='Tilt' options={{max : 25}} >
                <div className={style.photo}>
                    <div className={style.image}>

                    </div>
                </div>
                </Tilt>
            </Tilt>
            </Fade>
        </div>
    );
}

export default Main;
