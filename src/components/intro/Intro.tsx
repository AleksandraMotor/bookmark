import { isDesktop } from 'react-device-detect';
import classNames from 'classnames';
import Button from '../button/Button';

import './Intro.scss';

const Intro: React.FC = () => {
    return (
        <div className={classNames({
            'intro': true,
            'intro--desktop': isDesktop
        })}>
        <h1 className={classNames({
            'intro__title': true,
            'intro__title--desktop': isDesktop
        })}>
            A Simple Bookmark Manager
        </h1>
        <p className={classNames({
            'intro__text': true,
            'intro__text--desktop': isDesktop
        })}>
          A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.
        </p>
        <div className='intro__buttons'>
          <Button>Get it on Chrome</Button>
          <Button type='grey'>Get it on Firefox</Button>
        </div>
      </div>
    );
};

export default Intro;