export default function TodoList(props) {
  return (
    <>
      <section>
        <section>
          <h4>Total Task: {props.totalLength}</h4>
          <h4>Completed Task: {props.completedLength}</h4>
        </section>

        <h3>Available Tasks</h3>
        <ul>
          {props.todos.length > 0 ? (
            props.todos.map((element) => (
                <li key={element.id}>
                <input
                    type="checkbox"
                    checked={element.completed}
                    onChange={() => props.toggle(element.id)}
                />
                <span>{element.task}</span>
                <button onClick={() => props.delete(element.id)}>Delete</button>
                </li>
            ))
            ) : (
            <p style={{ textAlign: "center", opacity: 0.7 }}>No tasks available!</p>
            )}
        </ul>
      </section>
    </>
  );
}
