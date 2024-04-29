import React from "react";
import style from "./todo.module.css";
import { RiDeleteBin5Line } from "react-icons/ri";
export default function Todo({ items, setItems }) {
  function handleDelete(itemToDelete) {
    setItems(items.filter((item) => item.id !== itemToDelete.id));
  }

  function completed(itemToComplete) {
    const updatedItems = items.map((item) =>
      item.id === itemToComplete.id
        ? { ...item, completed: !item.completed } // Toggle the completed status
        : item
    );
    setItems(updatedItems);
  }
  return (
    <>
      <div className="container">
        <div className={style.todoWrapper}>
          <div className={style.todoGrid}>
            <ul className={style.todos}>
              {items.map((item) => (
                <li
                  key={item.id}
                  className={item.completed ? style.completed : style.list}
                  onClick={() => completed(item)}
                >
                  {item.name}
                  <div onClick={(e) => e.stopPropagation()}>
                    <RiDeleteBin5Line
                      className={style.icon}
                      onClick={() => handleDelete(item)}
                    />
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
