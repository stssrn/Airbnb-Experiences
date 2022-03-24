import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Card from './components/Card';

const App = (props) => {
    const cards = props.activitiesData.map(data => (
        <Card
            key={data.id}
            {...data}
        />
    ));
    return (
    <div className='container'>
        <Header />
        <Hero />
        <div className='app--card_list'>
            {cards}
        </div>
    </div>
    );
};

export default App