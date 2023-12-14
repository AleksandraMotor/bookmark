import Button from '../../button/Button';
import logoBookmark from '../../../assets/logo/logo-bookmark.svg';

import './NavigationDesktop.scss';

const NavigationDesktop: React.FC = () => {
    return (
        <div className='navigation-desktop'>
            <img src={logoBookmark} alt="Logo Bookmark" />
            <div className='navigation-desktop__menu'>
                <span className='navigation-desktop__menu__item'>features</span>
                <span className='navigation-desktop__menu__item'>pricing</span>
                <span className='navigation-desktop__menu__item'>contact</span>
                <Button type='red'>LOGIN</Button>
            </div>
        </div>
    );
};

export default NavigationDesktop;