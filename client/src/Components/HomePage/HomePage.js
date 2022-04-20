import React from 'react';
import { Button } from 'reactstrap';
import './HomePage.css';

const Home = () => {

    return (
        <div class="pageContainer">

            <h1 class="head">Paonitor Control Panel</h1>

            <div class="buttonContainer">

                <Button style={{ backgroundColor: '#384D48' }} size="lg" className="buttonStyle">Button 1</Button>{' '}
                <Button style={{ backgroundColor: '#384D48' }} size="lg" className="buttonStyle">Button 2</Button>{' '}
                <Button style={{ backgroundColor: '#384D48' }} size="lg" className="buttonStyle">Button 3</Button>{' '}
                <Button style={{ backgroundColor: '#384D48' }} size="lg" className="buttonStyle">Button 4</Button>{' '}
                <Button style={{ backgroundColor: '#384D48' }} size="lg" className="buttonStyle">Button 5</Button>{' '}
                <Button style={{ backgroundColor: '#384D48' }} size="lg" className="buttonStyle">Button 6</Button>{' '}
                <Button style={{ backgroundColor: '#384D48' }} size="lg" className="buttonStyle">Button 7</Button>{' '}
                <Button style={{ backgroundColor: '#384D48' }} size="lg" className="buttonStyle">Button 8</Button>{' '}

            </div>

        </div>
    );

}

export default Home;