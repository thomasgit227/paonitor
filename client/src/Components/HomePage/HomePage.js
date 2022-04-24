import React from 'react';
import './HomePage.css';
import ProgramCard from './ProgramCard.js';

const Home = () => {

    return (
        <div class="pageContainer">

            <h1 class="head">Paonitor Control Panel</h1>

            <div class="buttonContainer">
                <ProgramCard title="Snail" description="It's like Snake, but not"/>
                <ProgramCard title="Stacker" description="Took too long to make"/>
                <ProgramCard title="Pulse" description="Visuals"/>
                <ProgramCard title="Pao" description="Kuo-Pao Yang"/>
                <ProgramCard title="Rainbow" description="Double Rainbow: all the Way"/>
                <ProgramCard title="Taco" description="Live Mas"/>
                <ProgramCard title="Spiral" description="Square Spiral Pattern"/>
                <ProgramCard title="ACM" description="Join Us or Else..."/>

            </div>
        </div>
    );

}

export default Home;

