import React from 'react';
import { Button } from 'reactstrap';
import './HomePage.css';

const Home = () =>{

    return (
        <div class="pageContainer">
            
            <h1 class="head">Paonitor Control Panel</h1>

            <div class="buttonContainer">
               
                <div className="col1">
                    <Button color="primary" size="lg" className="buttonStyle">Button 1</Button>{' '}
                    <Button color="primary" size="lg" className="buttonStyle">Button 2</Button>{' '}
                    <Button color="primary" size="lg" className="buttonStyle">Button 3</Button>{' '}
                    <Button color="primary" size="lg" className="buttonStyle">Button 4</Button>{' '}
                </div>
                
                <div className="col2">
                    <Button color="primary" size="lg" className="buttonStyle">Button 5</Button>{' '}
                    <Button color="primary" size="lg" className="buttonStyle">Button 6</Button>{' '}
                    <Button color="primary" size="lg" className="buttonStyle">Button 7</Button>{' '}
                    <Button color="primary" size="lg" className="buttonStyle">Button 8</Button>{' '}
                </div>
                
            </div>
            
        </div>
    );

}

export default Home;