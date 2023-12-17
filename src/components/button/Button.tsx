import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
    type?: string;
    children: string;
}

const Button: React.FC<ButtonProps> = ({type, children}) => {
    return (
        <button className={classNames({
            'button': true,
            'button--grey': type === 'grey',
            'button--red': type === 'red',
            'button--white': type === 'white',
            'button--full-width': type === 'full-width',
        })}>
            {children}
        </button>
    );
};

export default Button;