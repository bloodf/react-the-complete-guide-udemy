import React from 'react';

const withClass = (WrappedComponent, ClassNames) => (props) => (<div {...props}><WrappedComponent /></div>);

export default withClass;