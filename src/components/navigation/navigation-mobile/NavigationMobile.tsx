import { useState } from 'react';
import classNames from 'classnames';
import Button from '../../button/Button';
import iconHamburger from '../../../assets/icons/icon-hamburger.svg';
import iconClose from '../../../assets/icons/icon-close.svg';
import logoBookmark from '../../../assets/logo/logo-bookmark.svg';
import logoBookmarkFull from '../../../assets/logo/logo-bookmark-full.svg';

import './NavigationMobile.scss';

const NavigationMobile: React.FC = () => {
    const [showMenu, setshowMenu] = useState(false);
    const showMenuList = () => setshowMenu(!showMenu);
    
    return (
        <div className='navigation-mobile'>
            {!showMenu && (
                <div className='navigation-mobile__header'>
                    <img src={logoBookmark} alt="Logo Bookmark" />
                    <img src={iconHamburger} alt="Expand Menu" onClick={showMenuList}/>
                </div>
            )}
            {showMenu && ( 
                <div className='navigation-mobile__header navigation-mobile__header--show-list'>
                    <img src={logoBookmarkFull} alt="Logo Bookmark" />
                    <img src={iconClose} alt="Expand Menu" onClick={showMenuList}/>
                </div>
            )}
            <div className={classNames({
                'navigation-mobile__menu': true,
                'navigation-mobile__menu--hide': !showMenu
            })}>
                <span className='navigation-mobile__menu__item'>features</span>
                <span className='navigation-mobile__menu__item'>pricing</span>
                <span className='navigation-mobile__menu__item'>contact</span>
                <span className='navigation-mobile__menu__item'>
                    <Button type='white'>LOGIN</Button>
                </span>
            </div>
        </div>
    );
};

export default NavigationMobile;