import React from 'react';

const Validantion = (props) => {
    const hasError = props.text.length < 5 && props.text.length;
    const style = {
        borderBottom: `1px solid ${hasError ? 'red' : 'green'}`,
    }

    return (
        <div
            style={style}
            className={props.className}
        >
         {hasError ? (<div><hr /><p>Text too short.</p></div>) : null}
         {props.children}
        </div>
    )
}

export default Validantion;