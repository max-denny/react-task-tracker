import { useState } from "react";
import AddTask from "./components/AddTask";

import Header from "./components/Header";
import Tasks from "./components/Tasks";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false)
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

      const addTask = (task) => {
        const id = Math.floor(Math.random() * 10000) + 1
        console.log(id);

        const newTask = {id, ...task};

        setTasks([...tasks, newTask]);


      }

      const deleteTask = (id) => {
        setTasks(tasks.filter((task) => task.id !== id ))
      }

      const toggleReminder = (id) => {
        setTasks(tasks.map((task) => 
        task.id === id ? {...task, reminder : !task.reminder} : task))
      }

  return (
    <div className="container">
      <Header addTask={()=> setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd= {addTask} />}
      {tasks.length > 0 ? <Tasks tasks = {tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : "No tasks to show"}
    </div>
  );
}

export default App;
