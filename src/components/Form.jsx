import React, { useState } from "react";
import style from "./form.module.css";

export default function Form({ handleAddItems }) {
  const [name, setName] = useState("");

  //create a handler function that is triggered by Add button
  const handleAddButtonClick = (e) => {
    // prevent page reload
    e.preventDefault(e);
    const newItem = { name, id: Date.now() };
    //passing the newItem object into the handler function as an argument
    handleAddItems(newItem);
    // Reset the input field after adding the item
    setName("");
  };
  return (
    <>
      <div className={style.flex}>
        <div className={style.inputWrapper}>
          <div className={style.inputFlex}>
            <div>
              <form onSubmit={handleAddButtonClick}>
                <input
                  type="text"
                  required
                  placeholder="What would you like to do?"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                <br />
                <br />
                <button type="submit">Add</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
