import { useState } from "react";
export default function TodoForm(props) {
  const [task, setTask] = useState("");

  function changeHandler(e) {
    const keystroke = e.target.value;
    setTask(keystroke);
    console.log(keystroke); 
  }

  function submit(e){
    e.preventDefault();
    const addTask = props.onSubmit(task );
    setTask("");
  }

  return (
    <section>
      <form
        onSubmit={submit}
      >
        <input
          type="text"
          onChange={changeHandler}
          value={task}
          placeholder="Enter the Task"
          
        />
        <button
        className="todo-btn"
        type="submit">Add Task</button>
      </form>
    </section>
  );
}