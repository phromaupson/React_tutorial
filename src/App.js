import React, { useState } from "react";
import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([
    {
      userId: 1,
      id: 1,
      title: "delectus aut autem",
      completed: false,
    },
    {
      userId: 1,
      id: 2,
      title: "quis ut nam facilis et officia qui",
      completed: false,
    },
    {
      userId: 1,
      id: 3,
      title: "fugiat veniam minus",
      completed: false,
    },
    {
      userId: 1,
      id: 4,
      title: "et porro tempora",
      completed: true,
    },
    {
      userId: 1,
      id: 5,
      title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
      completed: false,
    },
  ]);

  const removeTodo = (id) => {
    const remove = todos.filter((i) => i.id !== id);

    setTodos(remove);
  };

  return (
    <div>
      {todos.map(
        (
          i // 1 2
        ) => (
          <div key={i.id}>
            <Todo text={i.title} age={i.id} />
            <button
              onClick={() => {
                removeTodo(i.id); // 1 2
              }}
            >
              delete
            </button>
          </div>
        )
      )}
    </div>
  );
}

export default App;
