import React, { useState, useEffect} from "react";

function ItemPage() {
const [items, setItems] = useState([])


    useEffect(() => {
        fetch("/items")
        .then((res) => res.json())
        .then((json) => (setItems(json)))
      }, []);

      return (
          <div id="itemList">
              <h2>Item List</h2>
            {items.map((item) => (
                <div id={item.id}>
                Item id: {item.id}
                <br></br>
                Name: {item.name}
                <br></br>
                <br></br>
                </div>
                
            ))}
          </div>
      )
      
}

export default ItemPage;