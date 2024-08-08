import logo from "./logo.svg";
import "./App.css";
import GoalList from "./Components/GoalList/GoalList";
import NewGoal from "./Components/NewGoal/NewGoal";
import { useState } from "react";

function App() {
  const [goals,setGoals] = useState([
    { id: "1", text: "hello world" },
    { id: "2", text: "Nikita" },
  ]);

  const addNewGoalHandler = (newGoal) => {
    setGoals([...goals,newGoal])
    console.log(goals);
  };
  return (
    <div>
      <NewGoal onAddGoal={addNewGoalHandler} goals={goals}></NewGoal>
      <GoalList goals={goals} />
    </div>
  );
}

export default App;
