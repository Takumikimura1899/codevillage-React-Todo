import React, { useState } from "react";

const Form = ({ todos, setTodos }) => {
  const [value, setValue] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("value:", value);
    if (value === "") {
      alert("文字を入力してください");
      return;
    }
    setTodos([...todos, { content: value }]);
    setValue("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        onChange={(event) => {
          setValue(event.target.value);
        }}
        value={value}
      />
    </form>
  );
};

export default Form;
