import React from 'react';
import SimpleBookmarking from './components/simple-bookmarking/SimpleBookmarking';
import SpeedySearching from './components/speedy-searching/SpeedySearching';
import EasySharing from './components/easy-sharing/EasySharing';
import classNames from 'classnames';

import './Features.scss';

class Features extends React.Component<{}, {currentView: string}> {

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.state = {
            currentView: 'simple-bookmarking'
        }
    }

    render() {
        const switchView = () => {
            switch(this.state.currentView) {
                case 'simple-bookmarking': return <SimpleBookmarking/>;
                case 'speedy-searching': return <SpeedySearching/>;
                case 'easy-sharing': return <EasySharing/>
            }
        }

        return (
            <div className='features'>
                <div className='features__navigation'>
                    <span
                        className={classNames({
                            'features__navigation__tab': true,
                            'features__navigation__tab--active': this.state.currentView === 'simple-bookmarking',
                        })}
                        onClick={(e) => this.setState({currentView: 'simple-bookmarking'})}
                    >
                        Simple Bookmarking
                    </span>
                    <span
                        className={classNames({
                            'features__navigation__tab': true,
                            'features__navigation__tab--active': this.state.currentView === 'speedy-searching',
                        })}
                        onClick={(e) => this.setState({currentView: 'speedy-searching'})}
                    >
                        Speedy Searching
                    </span>
                    <span
                        className={classNames({
                            'features__navigation__tab': true,
                            'features__navigation__tab--active': this.state.currentView === 'easy-sharing',
                        })}
                        onClick={(e) => this.setState({currentView: 'easy-sharing'})}
                    >
                        Easy Sharing
                    </span>
                </div>
                <div className='features__content'>
                    {switchView()}
                </div>            
            </div>
        );
    }
};

export default Features;