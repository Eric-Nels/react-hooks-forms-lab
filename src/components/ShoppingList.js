import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchText, setSearchText] = useState('')

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  

  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All" && searchText === '') {
      return true;
    } else if (selectedCategory === item.category){
      return item.category === selectedCategory;
    } else if (item.name.includes(searchText)) {
      return item.name.includes(searchText);
    }
  })
  

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={searchText} onSearchChange={(event) => {
        setSearchText(event.target.value)
      }
      }/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;

