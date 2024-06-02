import React, { useRef, useState } from "react";

export default function ToDoList() {
  const [task, setTask] = useState([]);
  const inputRef = useRef();
  let [forIndexNum, setForIndexNum] = useState(-1);

  const handerClickAddTodo = () => {
    if (inputRef.current.value) {
      let nameBut = document.getElementById("butAddOrEdite");
      if (nameBut.innerText == "Add") {
        const valueText = inputRef.current.value;
        setTask([...task, valueText]);
        inputRef.current.value = "";
      } else {
        let edite = [...task];
        edite.splice(forIndexNum, 1, inputRef.current.value);
        setTask(edite);
        nameBut.innerText = "Add";
        inputRef.current.value = "";
      }
    }
  };

  const clickEdite = (index) => {
    inputRef.current.value = task[index];
    document.getElementById("butAddOrEdite").innerText = "Edite";
    setForIndexNum(index);

    // task[index]=;
    console.log(forIndexNum);
  };
  const clickDelete = (index) => {
    const deleteFun = [...task];
    deleteFun.splice(index, 1);
    setTask(deleteFun);
    console.log("you clicked add Delete");
  };

  return (
    <>
      <div className=" text-center bg-dark p-1 m-auto w-75">
        <input
          type="text"
          placeholder="enter your task ... ✍️"
          ref={inputRef}
        />
        <button onClick={handerClickAddTodo} id="butAddOrEdite">
          Add
        </button>
      </div>
      <ul className=" list-unstyled  ">
        {task.map((iteam, index) => {
          return (
            <li
              key={index}
              className=" text-light d-flex border border-2 border-danger "
            >
              {iteam}
              <div className=" d-inline but-end ">
                <button
                  className=" btn bg-primary "
                  onClick={() => clickEdite(index)}
                >
                  Edite
                </button>
                <button
                  className=" btn bg-danger "
                  onClick={() => clickDelete(index)}
                >
                  delete
                </button>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
}
