import React from "react";

const Todo = ({ text, age }) => {
  //   const { text } = props;
  return (
    <div>
      {/* <h3>{props.text}</h3> */}
      <h3>
        {age}: {text}
      </h3>
    </div>
  );
};

export default Todo;
