import React, { useState } from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
  const [todos, setTodos] = useState([
    { content: "課題をする" },
    { content: "課題をする" },
    { content: "課題をする" },
    { content: "課題をする" },
  ]);

  return (
    <>
      <h1>ToDo App</h1>
      <Form todos={todos} setTodos={setTodos} />
      <List todos={todos} />
    </>
  );
};

export default App;
