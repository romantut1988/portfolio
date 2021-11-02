import React from 'react';
import style from './Contacts.module.css';
import styleContainer from '../common/styles/Container.module.css';





function Contacts() {
    return (
        <div className={style.contactsBlock}>
            <div className={style.container}>
                <Title text={'Contacts'} />
                <form className={style.form}>
                    <input type='text' className={style.formArea} placeholder='Name'/>
                    <input type='text' className={style.formArea} placeholder='e-mail'/>
                    <textarea className={style.messageArea} placeholder='Message'/>
                    <button type='submit'>Send message</button>
                </form>
            </div>
        </div>
    );
}

export default Contacts;