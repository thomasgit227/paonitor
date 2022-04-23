import React from 'react';
import './HomePage.css';
import ProgramCard from './ProgramCard.js';

const Home = () => {

    return (
        <div class="pageContainer">

            <h1 class="head">Paonitor Control Panel</h1>

            <div class="buttonContainer">
                <ProgramCard title="Snake" description="Arcade Game"/>
                <ProgramCard title="Stacker" description="Arcade Game"/>
                <ProgramCard title="Pulse" description="Visuals"/>
                <ProgramCard title="Rave" description="Visuals"/>
            </div>
        </div>
    );

}

export default Home;

