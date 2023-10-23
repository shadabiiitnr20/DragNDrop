import React, { useState } from "react";
import { data } from "../constants/Data";

const DragDrop = () => {
  const [draggedList, setDraggedList] = useState([]);
  const [list, setList] = useState(data);

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  const handleDragStart = (e) => {
    e.dataTransfer.setData("id", e.target.id);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    const id = e.dataTransfer.getData("id");
    const item = list.find((item) => item.id == id);
    const filteredList = list.filter((item) => item.id != id);
    if (item) {
      setDraggedList([...draggedList, item]);
      setList(filteredList);
    }
  };

  return (
    <div className="grid grid-cols-2 gap-1">
      <div className="border border-solid border-black m-2 p-2 bg-white shadow-lg rounded-lg">
        <h3 className="text-md font-semibold underline">
          Drag Items From Here
        </h3>
        <ul>
          {list.map((item) => {
            return (
              <li
                className="my-1 p-1 mx-0.5 border border-dashed border-red-500 cursor-move"
                key={item.id}
                id={item.id}
                draggable={true}
                onDragStart={handleDragStart}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
      <div
        className="border border-solid border-black m-2 p-2 bg-white shadow-lg rounded-lg"
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <h3 className="text-md font-semibold underline">Drop Items Here</h3>
        <ul>
          {draggedList.map((item) => {
            return (
              <li
                className="my-1 p-1 mx-0.5 border border-dashed border-red-500 cursor-move"
                key={item.id}
                id={item.id}
              >
                {item.title}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default DragDrop;
