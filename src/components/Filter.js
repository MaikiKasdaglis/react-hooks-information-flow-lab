import React from "react";

function Filter({onCategoryChange}) {
//need to call onCategoryChange(e.target.value) onChange
    
    return(
        <div className="Filter">
        <select name="filter" onChange={e => onCategoryChange(e.target.value)}>
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
    )
}

export default Filter