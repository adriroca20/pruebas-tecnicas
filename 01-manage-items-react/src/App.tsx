import React, { useState } from "react";
import "./App.css";
import { Item } from "./components/item";

interface IItem {
  id: any;
  timestamp: Date;
  text: string;
}

const INITIAL_ITEMS: IItem[] = [
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    text: "Videojuegos",
  },
  {
    id: crypto.randomUUID(),
    timestamp: new Date(),
    text: "Libros",
  },
];
function App() {
  const [items, setItems] = useState(INITIAL_ITEMS);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { elements } = event.currentTarget;
    const input = elements.namedItem("item");
    const isInput = input instanceof HTMLInputElement;
    if (!isInput || input == null) return;
    const newItem: IItem = {
      id: crypto.randomUUID(),
      timestamp: new Date(),
      text: input.value,
    };
    setItems((prevItems) => {
      return [...prevItems, newItem];
    });
    input.value = "";
  };
  function removeElement(id: any) {
    const newItems = items.filter((item) => {
      return item.id != id;
    });
    setItems(() => {
      return newItems;
    });
  }
  return (
    <>
      <main>
        <aside>
          <form onSubmit={handleSubmit} aria-label="form-manage-list-items">
            <label htmlFor="">
              Elemento a introducir
              <input
                type="text"
                name="item"
                required
                placeholder="Videojuegos"
              />
            </label>
            <button type="submit">Añadir elemento a la lista</button>
          </form>
        </aside>
        <section>
          <h2>Lista de elementos</h2>
          {items.length == 0 ? (
            <p>
              <strong>No hay elementos en la lista</strong>
            </p>
          ) : (
            <ul>
              {items.map((item: IItem) => {
                return <Item key={item.id} {...item} handleClick={()=>removeElement(item.id)}></Item>;
              })}
            </ul>
          )}
        </section>
      </main>
    </>
  );
}

export default App;
