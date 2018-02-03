import React from 'react';
import Navigation from '../navigation';

class panel1 extends React.Component {
    state = {
        url: '../img/header-img.png',
        letter: 'R',
    };
    render() {
        return (
            <section className="panel-1">
                <Navigation imgurl={this.state.url} logo={this.state.letter}/>
            </section>
        );
    }
}

export default panel1;
