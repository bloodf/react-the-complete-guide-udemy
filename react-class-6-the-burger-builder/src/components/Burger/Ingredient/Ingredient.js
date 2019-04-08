import React, { Component } from 'react';
import CSS from './Ingredient.css';
import PropTypes from 'prop-types';

class BurgerIngredient extends Component {
  constructor(props) {
    super(props);
    
    this.ingredient = undefined;
  }

  render() {
    switch (this.props.type) {
      case 'bread-bottom':
        this.ingredient = <div className={CSS.BreadBottom} />;
        break;
      case 'bread-top':
        this.ingredient = (
          <div className={CSS.BreadTop}>
            <div className={CSS.Seeds1} />
            <div className={CSS.Seeds2} />
          </div>
        );
        break;
      case 'meat':
        this.ingredient = <div className={CSS.Meat} />;
        break;
      case 'cheese':
        this.ingredient = <div className={CSS.Cheese} />;
        break;
      case 'salad':
        this.ingredient = <div className={CSS.Salad} />;
        break;
      case 'bacon':
        this.ingredient = <div className={CSS.Bacon} />;
        break;
      default:
        this.ingredient = undefined;
    }
    return this.ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired,
}

export default BurgerIngredient;
