import React, { useState, useEffect } from "react";

function Inventory( {character} ) {
    const [inventory, setInventory] = useState([])

    useEffect(() => {
        if (character.id)
        setInventory(character.inventory)
       
      }, []);

    return (
        <div>
        </div>
    )
}

export default Inventory;