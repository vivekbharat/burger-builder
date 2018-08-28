import React from "react";
import classes from "./Burger.css";

import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const Burger = props => {
  let transforemedIngrediets = Object.keys(props.ingredients)
    .map(igKey => {
      // console.log([...Array(props.ingredients[igKey])]);
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        // console.log(val);
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);

  if (transforemedIngrediets.length === 0) {
    transforemedIngrediets = <p>Please start adding Ingredients</p>;
  }

  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transforemedIngrediets}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default Burger;
