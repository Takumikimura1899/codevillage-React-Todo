import React from "react";
import Form from "./Form";
import List from "./List";

const App = () => {
  const todos = [
    { content: "課題をする" },
    { content: "課題をする" },
    { content: "課題をする" },
    { content: "課題をする" },
  ];

  return (
    <>
      <h1>ToDo App</h1>
      <Form />
      <List todos={todos} />
    </>
  );
};

export default App;
