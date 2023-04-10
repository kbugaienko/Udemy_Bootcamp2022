import React, { useState } from "react";

const Form = props => {
  const [name, setName] = useState('');

  const handlerSubmit = event => {
    event.preventDefault();
    props.addTask(name);
    setName('');
  };

  const changeHandler = e => {
    setName(e.target.value);
  };

  return (
  <form onSubmit={handlerSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={changeHandler}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>
    </form>
  );
};

export default Form;
