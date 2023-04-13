import React, { useState, useRef, useEffect } from "react";

import { nanoid } from "nanoid";

import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import usePrevious from "./components/UsePrevious";

const FILTER_MAP = {
  All: () => true,
  Active: (task) => !task.completed,
  Completed: (task) => task.completed
};
console.log('filter map: ',FILTER_MAP);

const FILTER_NAMES = Object.keys(FILTER_MAP);
console.log('filter names: ', FILTER_NAMES);

const App = (props) => {
  const [tasks, setTasks] = useState(props.tasks);
  const [filter, setFilter] = useState('All');

  const listHeadingRef = useRef(null);

  const toggleTaskCompleted = (id) => {
    const updatedTasks = tasks.map((task) => {
      // if this task has the same ID as the edited task
      if (id === task.id) {
        // use object spread to make a new object
        // whose `completed` prop has been inverted
        return { ...task, completed: !task.completed };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const deleteTask = (id) => {
    const remainingTasks = tasks.filter((task) => id !== task.id);
    setTasks(remainingTasks);
  };

  const editTask = (id, newName) => {
    const editedTaskList = tasks.map((task) => {
        // if this task has the same ID as the edited task
        if (id === task.id) {
          return { ...task, name: newName};
        }
        return task;
    });
    setTasks(editedTaskList);
  };

  const taskList = tasks.filter(FILTER_MAP[filter]).map((task) => (
    <Todo
      id={task.id}
      name={task.name}
      completed={task.completed}
      key={task.id}
      toggleTaskCompleted={toggleTaskCompleted}
      deleteTask={deleteTask}
      editTask={editTask}
    />
  ));
  console.log('tasks: ', tasks);
  console.log('filter: ', filter);
  console.log('Filtered list: ', tasks.filter(FILTER_MAP[filter]));

  const filterList = FILTER_NAMES.map((name) => (
    <FilterButton 
      key={name}
      name={name}
      isPressed={name === filter}
      setFilter={setFilter}
    />
  ));
  
  const addTask = (name) => {
    const newTask = {
      id: `todo-${nanoid()}`,
      name,
      completed: false,
    };
    setTasks([...tasks, newTask]);
  };

  const tasksNoun = taskList.length !== 1 ? "tasks" : "task";
  const headingText = `${taskList.length} ${tasksNoun} remaining`;
  const prevTaskLength = usePrevious(tasks.length);

  usePrevious();

  // Using useEffect() to control our heading focus
  useEffect(() => {
    if (tasks.length - prevTaskLength === -1) {
      listHeadingRef.current.focus();
    }
  }, [tasks.length, prevTaskLength]);

  return (
    <div className="todoapp stack-large">
      <h1>TodoMatic</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        {filterList}
      </div>
      <h2 id="list-heading" tabIndex='-1' ref={listHeadingRef}>{headingText}</h2>
      <ul
        className="todo-list stack-large stack-exception"
        aria-labelledby="list-heading"
      >
        {taskList}
        {/* <Todo name='Eat' completed={true} id='todo-0' />
        <Todo name='Sleep' completed={false} id='todo-1' />
        <Todo name='Repeat' completed={false} id='todo-2' /> */}
      </ul>
    </div>
  );
};

export default App;
