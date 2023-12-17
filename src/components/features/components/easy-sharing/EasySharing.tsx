import Button from '../../../button/Button';
import ilustration from '../../../../assets/ilustration/illustration-features-tab-3.svg';
import { isDesktop } from 'react-device-detect';

import './EasySharing.scss';

const EasySharing: React.FC = () => {
    return (
        <div className='feature-3'>
            <img className='feature-3__image' src={ilustration} alt="illustration-features-tab-3" />
            <div className='feature-3__info'>
                <h2 className='feature-3__info__title'>Share your bookmarks</h2>
                <p className='feature-3__info__text'>
                    Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                </p>
                {isDesktop && (
                    <Button>More Info</Button>
                )}
            </div>
        </div>
    );
};

export default EasySharing;