import React, { useState } from 'react';
import classNames from 'classnames';

import './Accordion.scss';
import { AccordionData } from './AccordionData';

interface QuestionProps {
    title: string;
    content: string;
}

const Question: React.FC<QuestionProps> = ({ title, content }) => {
    const [isActive, setIsActive] = useState(false);

    return (
        <div className={classNames({
            'accordion__item':true,
            'accordion__item--active': isActive
        })}>
            <div
                onClick={() => setIsActive(!isActive)}
                className='accordion__item__header'
            >
                <span className='accordion__item__header__title'>
                    {title}
                </span>
                <span className={classNames({
                    'accordion__item__header__icon': true,
                    'accordion__item__header__icon--active': isActive
                })}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none" stroke="currentColor" strokeWidth="3" d="M1 1l8 8 8-8"/></svg>
                </span>
            </div>
            {isActive && (
                <p className='accordion__item__content'>
                    {content}
                </p>   
            )}
        </div>
    );
};

const Accordion: React.FC = () => {
    return (
        <div className='accordion'>
            {AccordionData.map(( item, index ) => {
                return (
                    <Question
                        key={index}
                        title={item.title}
                        content={item.content}                        
                    />
                )
            })}
        </div>
    );
};

export default Accordion;