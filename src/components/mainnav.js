import React from 'react';
import {Link} from 'gatsby';

import mainNavStyle from './mainnav.module.scss';

import {aClick} from './utils';

const MainNav = () => {


    return <nav className={ mainNavStyle.nav }>
            <ul>
                <li><Link to="#home" onClick={(e) => aClick(e,'home')}>Home</Link></li>
                <li><Link to="#about" onClick={(e) => aClick(e,'about')}>About</Link></li>
                <li><Link to="#services" onClick={(e) => aClick(e,'services')}>Services</Link></li>
                <li><Link to="#skills" onClick={(e) => aClick(e,'skills')}>Skills</Link></li>
                <li><Link to="#education" onClick={(e) => aClick(e,'education')}>Education</Link></li>
                {/* <li><Link to="#experience" onClick={(e) => aClick(e,'experience')}>Experience</Link></li>
                <li><Link to="#work" onClick={(e) => aClick(e,'work')}>Work</Link></li> */}
                <li><Link to="#blog" onClick={(e) => aClick(e,'blog')}>Blog</Link></li>
                <li><Link to="#contact" onClick={(e) => aClick(e,'contact')}>Contact</Link></li>
            </ul>
        </nav>;
};

export default MainNav;