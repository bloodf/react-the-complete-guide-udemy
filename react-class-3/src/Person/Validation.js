import React from 'react';

const Validantion = (props) => {
    const hasError = props.text.length < 5;
    const style = {
        borderBottom: `1px solid ${hasError ? 'red' : 'green'}`,
    }

    return (
        <div
            style={style}
            className={props.className}
        >
         {props.children}
         {hasError ? (<div><hr /><p>Text too short.</p></div>) : null}
        </div>
    )
}

export default Validantion;