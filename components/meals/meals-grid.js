import classes from "./meals-grid.module.css";
import MealItem from "./meals-item";

export function MealsGrid({ meals }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meals} />
        </li>
      ))}
    </ul>
  );
}
