import React, { useRef, useState } from "react";

export default function ToDoList() {
  const [task, setTask] = useState([]);
  const inputRef = useRef();
 
  const handerClickAddTodo = () => {
    
     const valueText = inputRef.current.value;
    setTask([...task, valueText]);
    inputRef.current.value = "";
  };
  const clickEdite = (index) => {

    // task[index]=;
    console.log("you clicked add Edite");
  };
  const clickDelete = (index) => {
    const deleteFun = [...task]
    deleteFun.splice(index, 1)
    setTask(deleteFun);
    console.log("you clicked add Delete");
  };

  return (
    <>
      <div className=" text-center  p-1 m-auto w-75">
        <input
          type="text"
          placeholder="enter your task ... ✍️"
          ref={inputRef}
        />
        <button onClick={handerClickAddTodo}>add</button>
      </div>
      <ul className=" list-unstyled  ">
        {task.map((iteam, index) => {
          return (
            <li key={index} className=" d-flex border border-2 border-danger ">
              {iteam}
              <div className=" d-inline but-end ">
                <button onClick={() => clickEdite(index)}>Edite</button>
                <button onClick={() => clickDelete(index)}>delete</button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
