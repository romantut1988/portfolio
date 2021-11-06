import React from 'react';
import style from './Nav.module.scss';
import { Link, animateScroll as scroll} from 'react-scroll';

function Nav() {
    return (
        <div className={style.nav}>
            <a href="">Main</a>
            <a href="">Skills</a>
            <a href='#projects'>Projects</a>
                <Link
                    activeClass={style.active}
                    to='projects'
                    smooth={true}
                    ofset={1}
                    duration={500}
                    >Project</Link>
            <a href="">Contacts</a>
        </div>
    );
}

export default Nav;