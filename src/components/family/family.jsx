import React, { useState } from "react";
import s from "./family.module.css";
import { useGetFamilyQuery, useAddFamilyMutation } from "../../redux";

const Family = () => {
  const [count, setCount] = useState("");
  const [newFamily, setNewFamily] = useState("");
  const { data = [], isLoading } = useGetFamilyQuery(count);
  const [addFamily, { isError }] = useAddFamilyMutation();

  const handleAddFamily = async () => {
    if (newFamily) {
      await addFamily({ name: newFamily }).unwrap(); //unwrap - isError isLoading data
      setNewFamily("");
    }
  };

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <div>
      <div>
        <input
          value={newFamily}
          onChange={(e) => setNewFamily(e.target.value)}
          type="text"
        />
        <button onClick={handleAddFamily}>Add</button>
      </div>
      <div>
        <select value={count} onChange={(e) => setCount(e.target.value)}>
          <option value="">all</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
        </select>
      </div>
      <ul>
        {data.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default Family;
