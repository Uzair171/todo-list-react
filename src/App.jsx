import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import TodoForm from "./components/todoform";
import TodoList from "./components/todolist";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [completedLength, setCompletedLength] = useState(0);
//fucntion to handle the Add task button to add it in the array
  function submitHandler(taskValue) {
    if (taskValue.trim() !== "") {
      setTasks((prevTasks) => [
        ...prevTasks,
        {
          id: nanoid(),
          task: taskValue,
          completed: false,
        },
      ]);
    }
  }
//function to handle the toggle to make completed false or true
  function toggle(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }
//fucntion to delete the tasks from the todo-list
  function delTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }
//fucntion useeffect to render the completed and total tasks
  useEffect(() => {
    const completed = tasks.filter((task) => task.completed).length;
    setTotalLength(tasks.length);
    setCompletedLength(completed);
  }, [tasks]);

  return (
    <main>
      <h2>To-Do List</h2>
      <TodoForm onSubmit={submitHandler} />
      <TodoList
        todos={tasks}
        toggle={toggle}
        delete={delTask}
        totalLength={totalLength}
        completedLength={completedLength}
      />
    </main>
  );
}
