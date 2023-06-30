"use client";

import React, { useEffect } from "react";
import { useState } from "react";
import ListItem from "./listItem";
import {
  QuerySnapshot,
  collection,
  onSnapshot,
  query,
} from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

const List = () => {
  const [todos, setTodos] = useState(["Dhoni", "Captain"]);

  // Create todo
  // Read todo from firebase
  useEffect(() => {
    const q = query(collection(db, "games"));
    const unsubscribe = onSnapshot(q, (QuerySnapshot) => {
      let todoArr = [];
      QuerySnapshot.forEach((doc) => {
        todoArr.push({ ...doc.data(), id: doc.id });
      });
      setTodos(todoArr);
    });
    return () => unsubscribe;
  }, []);

  // Update todo
  // Delete todo

  return (
    <div className="m-10 w-3/4">
      <form className="flex justify-center items-center">
        <input type="text" placeholder="Add todo" className="input" />
        <button className="ml-2 btn">Add</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <ListItem key={index} todo={todo} />
        ))}
      </ul>
    </div>
  );
};

export default List;
