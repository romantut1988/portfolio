import React from 'react';
import style from './Contacts.module.css';
import Title from '../common/components/title/Title';
import Fade from 'react-reveal/Fade';

function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'} />
                <Fade left>
                <form className={style.form}>
                    <input type='text' className={style.formArea} placeholder='Name'/>
                    <input type='text' className={style.formArea} placeholder='e-mail'/>
                    <textarea className={style.messageArea} placeholder='Message'/>
                    <button type='submit'>Send message</button>
                </form>
                </Fade>
            </div>
        </div>
    );
}

export default Contacts;