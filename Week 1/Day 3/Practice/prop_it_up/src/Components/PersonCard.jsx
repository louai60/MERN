import React, { useState } from 'react';

const PersonCard = (props) => {
    const [age, setAge] = useState(props.age);

    const IncreamentAge = () => {
        setAge(age + 1);
    };

    return (
        <div>
            <div>
                <h1>{props.lastName}, {props.firstName}</h1>
                <p>Age: {age}</p>
                <p>Hair Color: {props.hairColor}</p>
            </div>
            <button onClick={IncreamentAge}>Birthday Button for {props.firstName} {props.lastName}</button>
        </div>
    );
};

export default PersonCard;

