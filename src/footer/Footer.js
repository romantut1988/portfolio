import React from 'react';
import style from './Footer.module.css';
import styleContainer from './Footer.module.css';







function Footer() {
    return (
        <div className={style.footer}>
            <div className={style.container}>
                <Title text={'Amialkovich Roman'}/>
                <div className={style.socialIcons}>
                   <div className={style.socialIcon}>
                       <a href=''>
                           <img src={telegramIcon} alt=''/>
                       </a>
                   </div>
                   <div className={style.socialIcon}>
                       <a href=''>
                           <img src={facebookIcon} alt=''/>
                       </a>
                   </div>
                   <div className={style.socialIcon}>
                       <a href=''>
                           <img src={likedinIcon} alt=''/>
                       </a>
                   </div>
                   <div className={style.socialIcon}>
                       <a href=''>
                           <img src={vkIcon} alt=''/>
                       </a>
                   </div>
                </div>
                <span className={style.copyright}>2021 All Rights Reserved.</span>
           </div>
        </div>
    );
}

export default Footer;