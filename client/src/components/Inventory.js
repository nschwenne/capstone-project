import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function Inventory({ character }) {
  const [inventory, setInventory] = useState([]);
  const [character_id, setCharacter_id] = useState("");
  const [showInventory, setShowInventory] = useState(false);
  const [item_id, setItem_id] = useState("");
  const [showAddItem, setShowAddItem] = useState(false);

  useEffect(() => {
    if (character.id) setInventory(character.inventories);
    setCharacter_id(character.id);
  }, [character.inventories, character.id]);

  function show() {
    if (showInventory === false) setShowInventory(true);
    else setShowInventory(false);
  }

  function showItem() {
    if (showAddItem === false) setShowAddItem(true);
    else setShowAddItem(false);
  }

  function handleAddItem(e) {
    e.preventDefault();
    fetch("/inventories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        character_id,
        item_id,
      }),
    }).then((res) => res.json()
    ).then((json) => {
      setInventory([...inventory, json])
      setItem_id("")
    });
  }

  function deleteButton(id) {
    fetch("/inventories/" + id, {
      method: "DELETE",
    });
    const newInvArray = inventory.filter((inventory) => inventory.id !== id);
    setInventory(newInvArray);
  }

  return (
    <div>
      <br></br>
      <button onClick={() => show()}>Inventory</button>
      <button id="deleteButton" onClick={() => showItem()}>
        Add Item
      </button>
      <br></br>
      <br></br>
      {showAddItem && (
        <div>
          <form onSubmit={handleAddItem}>
            <label htmlFor="itemId">Item Id: </label>
            <input
              type="number"
              id="itemId"
              value={item_id}
              onChange={(e) => setItem_id(e.target.value)}
            />
            <input type="submit" value="Add" />
            <Link to="/items">view Items</Link>
          </form>
        </div>
      )}
      {showInventory && (
        <div id="inventory">
          {inventory.map((item) => (
            <li key={item.id} id={item.id}>
              {item.item.name}
              <br></br>
              <button id="deleteButton" onClick={() => deleteButton(item.id)}>
                Delete
              </button>
              <div>
                Cost: {item.item.cost}
                <br></br>
                Description: {item.item.description}
                <br></br>
                Weight: {item.item.weight}lb
              </div>
              <br></br>
            </li>
          ))}
        </div>
      )}
    </div>
  );
}

export default Inventory;
