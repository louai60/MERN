import React from 'react';

const PersonCard = (props) => (
    <div>
        <div>
            <h1>{props.lastName}, {props.firstName}</h1>
            <p>Age: {props.age}</p>
            <p>Hair Color: {props.hairColor}</p>
        </div>
    </div>
);

export default PersonCard;
