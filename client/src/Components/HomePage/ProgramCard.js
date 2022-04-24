import React from 'react';
import axios from 'axios';
import './ProgramCard.css';

const updateAction = (actionName) => {
    console.log(actionName)
    axios.post("/action" , {
        action: actionName
    })
}

const ProgramCard = ({ title, description }) => {

    return (
        <div class="containerElement" onClick={() => updateAction(title)}>

            <div class="title">
                {
                // Note to Future Self
                // without the arrow function this will run on render 
                // foo() calls the function itself whereas foo passes the function to onClick
                // () => uses an event wrapper to solve this
                }
                <h4>{title}</h4>
            </div>

            <div class="description">
                <p>{description}</p>
            </div>

        </div>
    );

}

export default ProgramCard;

// Badge colors: Primary Secondary Success Danger Warning Info Light Dark