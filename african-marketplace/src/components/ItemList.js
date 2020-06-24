import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";
import ItemAdd from "./ItemAdd";
import ItemEdit from "./ItemEdit";

const initialItemToEdit = {
  product_name: "",
  description: "",
  price: "",
  location:"",
  category:""
};
const ItemList = () =>{
  const [itemList, setItemList] = useState([]);
  const [editing, setEditing] = useState(false);
  const [adding, setAdding] = useState(false);
  const [itemToEdit, setItemToEdit] = useState(initialItemToEdit);

  useEffect(() => {
    axiosWithAuth()
      .get("/products/my")
      .then(res => setItemList(res.data))
      .catch(error => console.log(error));
  }, []);

  const editItem = item => {
    setEditing(true);
    setAdding(false);
    setItemToEdit(item);
  };

  const addItem = () => {
    setAdding(true);
    setEditing(false);
  };

  const deleteItem = item => {
    axiosWithAuth()
    .delete(`/products/my/${item.id}`)
    .then(res => {
      axiosWithAuth()
      .get("/products/my")
      .then(res => setItemList(res.data))
      .catch(error => console.log(error));
    })
    .catch(error => console.log(error));
  };

  return (
    <div className="item-list">
      {!adding && !editing && (
      <ul>
      {itemList.map(item => (
        <li key={itemList.id} onClick={() => editItem(item)}>
          <span>{item.product}{"  "}</span>
          <span>{item.description}{"   "}</span>
          <span>{item.price}{"   "}</span>
          <span>{item.category}{"   "}</span>
          <span>{item.location}{"   "}</span>
          <span>{item.seller}{"   "}</span>
          <span className="delete" onClick={e => {
                  e.stopPropagation();
                  deleteItem(item)
                }
              }>
                x
          </span>{" "}
        </li>
      ))}
    </ul>
     )} 
    {!adding && !editing && (
    <div className="button-row">
        <button onClick={() => addItem()}>add an item</button>
    </div>
    )}

  {adding && (
    <ItemAdd  />
  )}

  {editing && (
    <ItemEdit editItem={itemToEdit} />
  )}
  </div>
  );
};

export default ItemList;


