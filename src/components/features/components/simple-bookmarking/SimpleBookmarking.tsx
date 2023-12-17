import Button from '../../../button/Button';
import ilustration from '../../../../assets/ilustration/illustration-features-tab-1.svg';
import { isDesktop } from 'react-device-detect';

import './SimpleBookmarking.scss';

const SimpleBookmarking: React.FC = () => {
    return (
        <div className='feature-1'>
            <img className='feature-1__image' src={ilustration} alt="illustration-features-tab-1" />
            <div className='feature-1__info'>
                <h2 className='feature-1__info__title'>Bookmark in one click</h2>
                <p className='feature-1__info__text'>
                    Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourites sites.
                </p>
                {isDesktop && (
                    <Button>More Info</Button>
                )}
            </div>
        </div>
    );
};

export default SimpleBookmarking;