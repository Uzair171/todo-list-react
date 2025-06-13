import { useEffect, useState } from "react";
import { nanoid } from "nanoid";
import TodoForm from "./components/todoform";
import TodoList from "./components/todolist";

export default function App() {
  const [tasks, setTasks] = useState([]);
  const [totalLength, setTotalLength] = useState(0);
  const [completedLength, setCompletedLength] = useState(0);

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

  function toggle(id) {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }

  function delTask(id) {
    setTasks((prevTasks) =>
      prevTasks.filter((task) => task.id !== id)
    );
  }

  useEffect(() => {
    const completed = tasks.filter((task) => task.completed).length;
    setTotalLength(tasks.length);
    setCompletedLength(completed);
  }, [tasks]);

  return (
    <main>
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
