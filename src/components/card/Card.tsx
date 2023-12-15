import classNames from 'classnames';
import dots from '../../assets/background/bg-dots.svg';
import Button from '../button/Button';
import { isDesktop } from 'react-device-detect';

import './Card.scss';

interface CardProps {
    image: string;
    title: string;
    subtitle: string;
    margin?: string;
}

const Card: React.FC<CardProps> = ({ image, title, subtitle, margin }) => {
    return (
        <div className={classNames({
            'card': true,
            'card--m-1': margin === 'm-1' && isDesktop,
            'card--m-2': margin === 'm-2' && isDesktop
        })}>
            <div className='card__image'>
                <img src={image} alt="Logo Przeglądarki" />
            </div>
            <div className='card__title'>{title}</div>
            <div className='card__subtitle'>{subtitle}</div>
            <img src={dots} alt="Background Dots" />
            <div className='card__cta'>
                <Button type='full-width'>Add & Install Extension</Button>
            </div>
        </div>
    );
};

export default Card;