import React from 'react';
import './ProgramCard.css';
import { Badge } from 'reactstrap';

const ProgramCard = ({ title, type, description, output }) => {

    return (
        <div class="containerElement">

            <div class="title">
                <h4>{title}&nbsp;<Badge color="light" pill> {type}</Badge></h4>
                
            </div>

            <div class="description">
                <p>{description}</p>
            </div>

        </div>
    );

}

export default ProgramCard;

// Badge colors: Primary Secondary Success Danger Warning Info Light Dark