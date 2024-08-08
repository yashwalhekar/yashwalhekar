import React, { useState } from "react";
import "./NewGoal.css";

const NewGoal = (props) => {
  const [goal, setGoal] = useState({ id: "", text: "" });

  const addGoalHandler = (event) => {
    event.preventDefault();
    props.onAddGoal(goal);
    setGoal({ id: "", text: "" });
  };

  const inputChangeHandler = (e) => {
    setGoal({
      id: String(props.goals.length + 1),
      text: e.target.value,
    });
  };

  return (
    <div className="newGoal">
      <form onSubmit={addGoalHandler}>
        <input type="text" value={goal.text} onChange={inputChangeHandler} />
        <button type="submit">Add Goal</button>
      </form>
    </div>
  );
};

export default NewGoal;
