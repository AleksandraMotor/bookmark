import classNames from 'classnames';
import './Button.scss';

interface ButtonProps {
    type?: string;
    children: string
}

const Button: React.FC<ButtonProps> = ({type, children}) => {
    return (
        <button className={classNames({
            'button': true,
            'button--grey': type === 'grey',
            'button--red': type === 'red',
            'button--white': type === 'white',
        })}>
            {children}
        </button>
    );
};

export default Button;