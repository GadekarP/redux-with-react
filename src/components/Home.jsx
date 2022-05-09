import React from "react";
import { useDispatch } from "react-redux";
import { depositAction, getAllProductAction } from "./../Action/product-action";

export default function Home() {
  const dispatch = useDispatch();
  const handleAddDeposit = () => {
    dispatch(depositAction());
  };
  const handelGetProduct=()=>{
    dispatch(getAllProductAction)
  }
  return (
    <div>
      <h1>this the redux page</h1>
      <button onClick={handleAddDeposit}>Deposit</button>
      <button onClick={handelGetProduct}>get Product</button>
    </div>
  );
}
