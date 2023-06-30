import React from "react";
import { FaRegTrashAlt } from "react-icons/fa";

const ListItem = ({ todo }) => {
  return (
    <>
      <li className="flex justify-center items-center ">
        <div className=" w-1/2 bg-slate-300 rounded-md mb-2 flex ">
          <input type="checkbox" className="m-2 cursor-pointer" />
          <p className="p-2 ">{todo}</p>
        </div>
        <button>{<FaRegTrashAlt />}</button>
      </li>
    </>
  );
};

export default ListItem;
