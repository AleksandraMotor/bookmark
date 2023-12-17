import Button from '../button/Button';

import './Intro.scss';

const Intro: React.FC = () => {
    return (
        <div className='intro'>
        <h1 className='intro__title'>
            A Simple Bookmark Manager
        </h1>
        <p className='intro__text'>
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