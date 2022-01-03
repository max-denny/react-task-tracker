import { useState } from "react";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [tasks, setTasks] = useState([
        {
            id: "1",
            text: "Baseball Game",
            day: "Thursday 4-19-22",
            reminder: true
        },
        {
            id: "2",
            text: "Dental Appointment",
            day: "Tuesday 2-29-22",
            reminder: false
        },
        {
            id: "3",
            text: "Haircut",
            day: "Monday 1-14-22",
            reminder: true
        }
      ]
)

      const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id ))
      }

  return (
    <div className="container">
      <Header />
      <Tasks tasks = {tasks} onDelete={deleteTask} />
    </div>
  );
}

export default App;
