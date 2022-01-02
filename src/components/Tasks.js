const tasks = [
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

const Tasks = () => {
    return (
        <>
        {
            tasks.map((task) => (
                <h3 key={task.id}>{task.text}</h3>
            ))
        }
        </>
    )
}

export default Tasks
