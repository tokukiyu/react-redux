import React, { useState } from "react";
interface Props {
  items: string[];
  heading: string;
}
function ListGroup({ items, heading }: Props) {
  const [selected, setSelect] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {items.length === 0 && <p>no data found</p>}
        {items.map((item, index) => (
          <li
            key={item}
            onClick={() => setSelect(index)}
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
