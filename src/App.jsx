import { useState, useEffect } from "react";
import "./App.css";
import Form from "./components/Form";
import Todo from "./components/Todo";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  // Load items from local storage or initialize an empty array
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("todoItems");
    return storedItems ? JSON.parse(storedItems) : [];
  });

  // Save items to local storage whenever the items state changes
  useEffect(() => {
    localStorage.setItem("todoItems", JSON.stringify(items));
  }, [items]);

  // Handler function that takes item as a parameter
  function handleAddItems(item) {
    // Setter function that returns a new array with elements from current state with a new item
    setItems((prevItems) => [...prevItems, item]);
  }

  return (
    <div className="App">
      <Header />
      <div className="bodywrapper">
        <Form handleAddItems={handleAddItems} />
        {items.length === 0 ? (
          <p
            style={{
              textAlign: "center",
              fontSize: "25px",
              fontWeight: "bolder",
            }}
          >
            no items yet, get started
          </p>
        ) : (
          <Todo items={items} setItems={setItems} />
        )}
        <Footer items={items} />
      </div>
    </div>
  );
}

export default App;
