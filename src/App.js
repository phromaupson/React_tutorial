import React, { useState, useEffect } from "react";
import axios from "axios";

import Todo from "./Todo";

function App() {
  const [todos, setTodos] = useState([]);
  var [id, setId] = useState(1);

  useEffect(() => {
    LoadData();
  }, [id]);

  const LoadData = () => {
    axios
      .get(`https://jsonplaceholder.typicode.com/todos/${id}`)
      .then((value) => {
        setTodos([value.data]);
        // console.log(value.data);
      });
  };

  return (
    <div>
      <label htmlFor="">Number: </label>
      <input
        type="text"
        onChange={(e) => {
          setId(e.target.value);
        }}
        value={id}
      />
      <button
        onClick={() => {
          setId((id = id + 1));
        }}
      >
        Submit
      </button>

      {todos.map((kam) => (
        <h2>{kam.title}</h2>
      ))}
      <h3>{id}</h3>
    </div>
  );
}

// const [todos, setTodos] = useState([]);
// const [name, setName] = useState("");
// const [password, setPassword] = useState("");

// useEffect(() => {
//   // เรียกใช้ฟังก์ชันที่ต้องการทุกครั้งที่เปิดหน้าเว็บครั้งแรก
//   loadData();
// }, []);

// const loadData = () => {
//   axios.get("https://jsonplaceholder.typicode.com/todos/1").then((result) => {
//     setTodos([result.data]);
//   });
// };

// const removeTodo = (id) => {
//   const remove = todos.filter((i) => i.id !== id);

//   setTodos(remove);
// };

// return (
//   <div>
//     {todos.map((i) => (
//       <div key={i.id}>
//         <Todo text={i.title} age={i.id} />
//         <button
//           onClick={() => {
//             removeTodo(i.id); // 1 2
//           }}
//         >
//           delete
//         </button>
//       </div>
//     ))}
//     <br />

//     <label htmlFor="">Name: </label>
//     <input
//       type="text"
//       onChange={(e) => {
//         setName(e.target.value);
//       }}
//       value={name}
//     />
//     <label htmlFor="">Password: </label>
//     <input
//       type="password"
//       onChange={(e) => {
//         setPassword(e.target.value);
//       }}
//       value={password}
//     />
//     <button
//       onClick={() => {
//         setName("");
//         setPassword("");
//       }}
//     >
//       Login
//     </button>
//   </div>
// );
// }

export default App;
