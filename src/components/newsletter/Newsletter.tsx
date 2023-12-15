import React, { useState } from 'react';
import classNames from 'classnames';

import './Newsletter.scss';

function Counter() {
    const[counter, setCounter] = React.useState(35000);
    React.useEffect(() => {
        counter > 0 && setTimeout(() => setCounter(counter - 1), 1000);
    }, [counter]);

    let joined = Intl.NumberFormat("en-US").format(counter);

    return (
        <span>{joined}</span>
    );
};

const Newsletter: React.FC = () => {

    const [email, setEmail] = useState('');
    const [error, setError] = useState(null);

    function isValidEmail(email: string) {
        return /\S+@\S+\.\S+/.test(email);
    }

    const handleChange = (event: { target: { value: string; }; }) => {
        if (!isValidEmail(event.target.value)) {
            setError(`Whoops, make sure it's an email`);
        }
        else {
            setError(null);
        }
        setEmail(event.target.value);
    };

    return (
        <div className='newsletter'>
            <div className='newsletter__counter'>
                <Counter/>
                <span>+ already joined</span>
            </div>
            <div className='newsletter__text'>
                Stay up-to-date with what we're doing
            </div>
            <form className='newsletter__form'>
                <div className='newsletter__form__email'>
                    <input
                        className={classNames({
                            'newsletter__form__email__input': true,
                            'newsletter__form__email__input--error': error
                        })}
                        type='email'
                        id='email'
                        name='email'
                        value={email}
                        onChange={handleChange}
                        placeholder='Enter your email address'
                    />
                {error && (
                    <span className='newsletter__form__email__error-message'>
                        {error}
                    </span>
                )}
                {error && (
                    <span className='newsletter__form__email__error-icon'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"><g fill="none" fillRule="evenodd"><circle cx="10" cy="10" r="10" fill="#FA5959"/><g fill="#FFF" transform="translate(9 5)"><rect width="2" height="7" rx="1"/><rect width="2" height="2" y="8" rx="1"/></g></g></svg>
                    </span>
                )}
                </div>
                <input
                    className='newsletter__form__submit'
                    type='submit'
                    value='Contact Us'
                />
            </form>
        </div>
    );
};

export default Newsletter;