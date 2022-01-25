//component - Search for searching contact by name
import React from "react";
import { FaRegTimesCircle } from "@react-icons/all-files/fa/FaRegTimesCircle";
const SearchBar = ({ value, clearInput, handleChange }) => {
  return (
    <div>
      <form
        className="flex items-center relative"
        onSubmit={(e) => e.preventDefault()}
      >
        {value === "" ? null : (
          <FaRegTimesCircle
            className="left-2 absolute text-slate-100 text-2xl cursor-pointer hover:rotate-180 transition duration-500"
            onClick={clearInput}
          />
        )}
        <input
          type="text"
          placeholder="Search"
          className="placeholder:text-white block w-4/5 border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:bg-cyan-400 transition duration-450 ease focus:ring-sky-100 focus:ring-1 sm:text-sm lowercase text-slate-100 text-xl"
          style={{ backgroundColor: "#08284b" }}
          value={value}
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default SearchBar;
