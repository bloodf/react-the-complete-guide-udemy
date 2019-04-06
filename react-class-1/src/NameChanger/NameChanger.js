import React from 'react';

const NameChanger = (props) => {
    return React.createElement('input', {
        defaultValue: props.name,
        placeholder: 'New Name',
        style: {
            borderRadius: '3px',
            border: '1px solid #999',
            padding: '5px'
        },
        onChange: (event) => {
            props.change(event.target.value);
        }
    })
}

export default NameChanger;