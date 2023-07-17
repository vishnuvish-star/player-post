"use client";
import React, { useEffect, useState } from "react";
import { db } from "../firebase/firebaseConfig";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from "firebase/firestore";

const Crud = () => {
  // firebase stored in variable
  const value = collection(db, "games");

  // useStates
  // add data for using this states
  const [playerName, setPlayerName] = useState("");
  const [role, setRole] = useState("");

  //read data
  const [getValue, setGetValue] = useState([]);

  // for editing
  const [editId, setEditId] = useState("");

  //for updating
  const [getUpdate, setGetUpdate] = useState(false);

  // useEffect for get data from firestore
  // read data
  useEffect(() => {
    const getData = async () => {
      const dataFromFirestore = await getDocs(value);
      setGetValue(
        dataFromFirestore.docs.map((items) => ({
          ...items.data(),
          id: items.id,
        }))
      );
    };
    getData();
  }, [value]);

  // add data to firestore
  const handleCreate = async () => {
    await addDoc(value, { player: playerName, role: role });
    setPlayerName("");
    setRole("");
  };

  // delete data
  const handleRemove = async (id) => {
    const removeData = doc(db, "games", id);
    await deleteDoc(removeData);
  };

  // Edit Data
  const handleEdit = async (id, player, role) => {
    setPlayerName(player);
    setRole(role);
    setEditId(id);
    // this state for updating
    setGetUpdate(true);
  };

  // update data (update as add data to firestore

  const handleUpdate = async () => {
    const updateData = doc(db, "games", editId);
    // editId indicate ,is selected which data is modified
    await updateDoc(updateData, { player: playerName, role: role });
    setGetUpdate(false);
    setPlayerName("");
    setRole("");
  };

  return (
    <>
      <div className="flex gap-5 mt-10 justify-center">
        <input
          className=" border-zinc-200 border-2 p-1 outline-none"
          type="text"
          value={playerName}
          onChange={(e) => {
            setPlayerName(e.target.value);
          }}
        />
        <input
          className=" border-zinc-200 border-2 p-1 outline-none"
          type="text"
          value={role}
          onChange={(e) => {
            setRole(e.target.value);
          }}
        />
        {!getUpdate ? (
          <button className="btn" onClick={handleCreate}>
            Create
          </button>
        ) : (
          <button className="btn" onClick={handleUpdate}>
            Update
          </button>
        )}
      </div>

      {getValue.map((item) => (
        <>
          <div
            className="w-3/4 flex justify-center items-center gap-3"
            key={item.id}
          >
            <span className="text-md">{item.player}</span>
            <span className="text-md">{item.role}</span>
            <button
              className="btn "
              onClick={() => {
                handleRemove(item.id);
              }}
            >
              Remove
            </button>
            <button
              className="btn "
              onClick={() => {
                handleEdit(item.id, item.player, item.role);
              }}
            >
              Edit
            </button>
          </div>
        </>
      ))}
    </>
  );
};

export default Crud;
