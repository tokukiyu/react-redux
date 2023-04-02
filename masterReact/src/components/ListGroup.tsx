import React, { useState } from "react";
function ListGroup() {
  let items = ["new york", "hong kong", "paris", "san Fransisco", "london"];
 const [selected, setSelect]=useState(-1)

  return (
    <>
      <h1>hello header</h1>
      <ul className="list-group">
        {items.length === 0 && <p>no data found</p>}
        {items.map((item, index) => (
          <li
            key={item}
            onClick={()=>setSelect(index)}
            className={
              selected === index ? "list-group-item active" : "list-group-item"
            }
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
