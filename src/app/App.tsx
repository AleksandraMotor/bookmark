import { useEffect, useState } from 'react';
import { isDesktop } from 'react-device-detect';
import classNames from 'classnames';
import Footer from '../components/footer/Footer';
import Intro from '../components/intro/Intro';
import NavigationMobile from '../components/navigation/navigation-mobile/NavigationMobile';
import NavigationDesktop from '../components/navigation/navigation-desktop/NavigationDesktop';
import ilustrationHero from '../assets/ilustration/illustration-hero.svg';
import Card from '../components/card/Card';
import { CardData } from '../components/card/CardData';
import Newsletter from '../components/newsletter/Newsletter';
import Accordion from '../components/accordion/Accordion';
import Button from '../components/button/Button';
import Features from '../components/features/Features';
import Modal from '../components/modal/Modal';

import './App.scss';

export default function App() {
    const [open, setOpen] = useState(false);

    const handleClose = () => {
        setOpen(false);
    };

    const handleOpen = () => {
        setOpen(true);
    };

    // window.onload = () => {
    //     setTimeout(handleOpen, 30000);
    // };

    return (
        <div className='bookmark-app'>
            {open && (
                <div
                    onClick={handleClose}
                    className='bookmark-app__modal-wrapper'
                >
                    <Modal/>
                </div>
            )}
            <header className='bookmark-app__header'>
                {!isDesktop && (
                    <NavigationMobile/>
                )}
                {isDesktop && (
                    <NavigationDesktop/>
                )}
            </header>
            <section className='bookmark-app__intro'>
                <div className='bookmark-app__intro__image'>
                    <img
                        // onMouseOver={handleOpen}
                        
                        src={ilustrationHero}
                        alt="Ilustration Hero"
                    />
                </div>
                <Intro/>
            </section>
            <section className='bookmark-app__section'>
                <h2 className='bookmark-app__section__title'>Features</h2>
                <p className='bookmark-app__section__text'>
                    Our aim is to make it quick and easy for you to access your favourite websites.
                    Your bookmarks sync between your devices so you can access them on the go.
                </p>
                <Features/>
            </section>
            <section className='bookmark-app__section'>
                <h2 className='bookmark-app__section__title'>Download the extension</h2>
                <p className='bookmark-app__section__text'>
                    We've got more browsers in the pipeline.
                    Please do let us know if you've got a favourite you'd like us to prioritize.    
                </p>
                <div className={classNames({
                    'bookmark-app__section__cards-wrapper': true,
                    'bookmark-app__section__cards-wrapper--desktop': isDesktop,
                })}>
                    { CardData.map((card, index) => {
                        return (
                            <Card
                                key={index}
                                image={card.image}
                                title={card.title}
                                subtitle={card.subtitle}
                                margin={card.margin}
                            />
                        )
                    })}
                </div>
            </section>
            <section className='bookmark-app__section'>
                <h2 className='bookmark-app__section__title'>Frequently Asked Questions</h2>
                <p className='bookmark-app__section__text'>
                    Here are some of our FAQs.
                    If you have any other questions you'd like answered please feel free to email us.     
                </p>
                <Accordion/>
                <div className='bookmark-app__section__button'>
                    <Button>More Info</Button>
                </div>
            </section>
            <footer className='bookmark-app__footer'>
                <Newsletter/>
                <Footer/>
            </footer>
        </div>
    );
};