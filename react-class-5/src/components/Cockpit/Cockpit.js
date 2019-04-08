import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

import css from './Cockpit.css';

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);
  const authContext = useContext(AuthContext);

  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
    toggleBtnRef.current.click();
    const timer = setTimeout(() => {
      console.log('Saved Data to Cloud!');
    }, 1000);
    return () => {
      clearTimeout(timer);
      console.log('[Cockpit.js] cleanup work');
    };
  }, []);

  return (
    <div>
      <button
        ref={toggleBtnRef}
        className={css.btn}
        onClick={props.togglePersons}
      >
        {props.showPersons ? 'Hide' : 'Show'} Persons
      </button>
      <button className={css.btn} onClick={props.addNewPerson}>
        Add new Person
      </button>
      <button className={css.btn} onClick={authContext.login}>
        Log In
      </button>
    </div>
  );
};

export default React.memo(Cockpit);
