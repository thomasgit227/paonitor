import React from 'react';
import './HomePage.css';
import ProgramCard from './ProgramCard.js';

const Home = () => {

    return (
        <div class="pageContainer">

            <h1 class="head">Paonitor Control Panel</h1>

            <div class="buttonContainer">
                <ProgramCard title="Snake" type="game" description="Classic snake arcade game" output="progCard" />
                <ProgramCard title="Snake" type="game" description="Classic snake arcade game" output="progCard" />
                <ProgramCard title="Snake" type="game" description="Classic snake arcade game" output="progCard" />
                <ProgramCard title="Snake" type="game" description="Classic snake arcade game" output="progCard" />
                <ProgramCard title="Snake" type="game" description="Classic snake arcade game" output="progCard" />
                <ProgramCard title="Snake" type="game" description="Classic snake arcade game" output="progCard" />
                <ProgramCard title="Snake" type="game" description="Classic snake arcade game" output="progCard" />
                <ProgramCard title="Snake" type="game" description="Classic snake arcade game" output="progCard" />
                
            </div>

        </div>
    );

}

export default Home;

