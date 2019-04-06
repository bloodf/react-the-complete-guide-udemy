import React from 'react';

const Person = (props) => {
    return React.createElement('p', {}, `I'm ${props.name}, age ${props.age}`)
}

export default Person;