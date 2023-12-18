import Button from "../button/Button";
import ilustration from '../../assets/ilustration/illustration-features-tab-3.svg';

import './Modal.scss';

const Modal: React.FC = () => {

    return (
        <div className='modal'>
            <div className='modal__image'>
                <img src={ilustration} alt="illustration-features-tab-3"/>
            </div>            
            <div className='modal__info'>
                <h2 className='modal__info__title'>Share your bookmarks</h2>
                <p className='modal__info__text'>
                    Easily share your bookmarks and collections with others. Create a shareable link that you can send at the click of a button.
                </p>
                <Button>More Info</Button>
            </div>
        </div>
    );
};

export default Modal;