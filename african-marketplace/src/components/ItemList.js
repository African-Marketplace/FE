import React, { useState, useEffect } from "react";
import axiosWithAuth from "../utils/axiosWithAuth";

const ItemList = () => {
  // const [itemList, setItemList] = useState([]);
  // // fetch your colors data from the server when the component mounts
  // // set that data to the colorList state property

  // useEffect(() => {
  //   axiosWithAuth()
  //     .get("/items")
  //     .then(res => setItemList(res.data))
  //     .catch(error => console.log(error));
  // }, []);

  return (
    <>
      <div>
        <h3> The List of Items </h3>
      </div>
    </>
  );
};

export default ItemList;
