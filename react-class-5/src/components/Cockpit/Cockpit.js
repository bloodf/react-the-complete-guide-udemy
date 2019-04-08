import React from 'react';
import css from './Cockpit.css';

const Cockpit = (props) => (
  <div>
    <button className={css.btn} onClick={props.togglePersons}>
      {props.showPersons ? 'Hide' : 'Show'} Persons
    </button>
    <button className={css.btn} onClick={props.addNewPerson}>
      Add new Person
    </button>
  </div>
);

export default Cockpit;