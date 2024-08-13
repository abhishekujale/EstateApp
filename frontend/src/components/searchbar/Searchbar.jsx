import { useState } from "react";

const types = ["buy", "rent"];

function SearchBar() {
  const [query, setQuery] = useState({
    type: "buy",
    location: "",
    minPrice: 0,
    maxPrice: 0,
  });

  const switchType = (val) => {
    setQuery((prev) => ({ ...prev, type: val }));
  };

  return (
    <div className="searchBar">
      <div className="flex">
        {types.map((type) => (
          <button
            key={type}
            onClick={() => switchType(type)}
            className={`py-4 px-9 border border-gray-400 bg-white text-sm capitalize ${
              query.type === type ? "bg-black text-white" : ""
            } ${types.indexOf(type) === 0 ? "rounded-tl-md" : ""} ${
              types.indexOf(type) === types.length - 1 ? "rounded-tr-md" : ""
            } ${types.length > 1 && "border-r-0"}`}
          >
            {type}
          </button>
        ))}
      </div>
      <form className="flex gap-2 border border-gray-400 h-16 items-center">
        <input
          type="text"
          name="location"
          placeholder="City Location"
          className="flex-1 px-2 py-1 border-none text-sm md:w-52 lg:w-36 sm:w-full sm:border sm:border-gray-400"
        />
        <input
          type="number"
          name="minPrice"
          min={0}
          max={10000000}
          placeholder="Min Price"
          className="flex-1 px-2 py-1 border-none text-sm md:w-52 lg:w-36 sm:w-full sm:border sm:border-gray-400"
        />
        <input
          type="number"
          name="maxPrice"
          min={0}
          max={10000000}
          placeholder="Max Price"
          className="flex-1 px-2 py-1 border-none text-sm md:w-52 lg:w-36 sm:w-full sm:border sm:border-gray-400"
        />
        <button className="flex-1 bg-yellow-400 border-none cursor-pointer flex items-center justify-center p-2 sm:p-2">
          <img src="/search.png" alt="" className="w-6 h-6" />
        </button>
      </form>
    </div>
  );
}

export default SearchBar;
