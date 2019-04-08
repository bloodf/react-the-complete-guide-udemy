import React, { useEffect } from 'react';
import css from './Cockpit.css';

const Cockpit = (props) => {
  useEffect(() => {
    console.log('[Cockpit.js] useEffect');
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
      <button className={css.btn} onClick={props.togglePersons}>
        {props.showPersons ? 'Hide' : 'Show'} Persons
      </button>
      <button className={css.btn} onClick={props.addNewPerson}>
        Add new Person
      </button>
    </div>
  );
};

export default Cockpit;
