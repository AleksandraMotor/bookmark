import Button from '../../../button/Button';
import ilustration from '../../../../assets/ilustration/illustration-features-tab-2.svg';
import { isDesktop } from 'react-device-detect';

import './SpeedySearching.scss';

const SpeedySearching: React.FC = () => {
    return (
        <div className='feature-2'>
            <img className='feature-2__image' src={ilustration} alt="illustration-features-tab-2" />
            <div className='feature-2__info'>
                <h2 className='feature-2__info__title'>Intelligent searching</h2>
                <p className='feature-2__info__text'>
                    Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks.
                </p>
                {isDesktop && (
                    <Button>More Info</Button>
                )}
            </div>
        </div>
    );
};

export default SpeedySearching;