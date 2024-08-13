
function Filter() {
  return (
    <div className="flex flex-col gap-2.5">
      <h1 className="font-light text-2xl">
        Search results for <b>London</b>
      </h1>
      <div className="flex flex-col gap-2.5">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="city" className="text-xs">Location</label>
          <input
            type="text"
            id="city"
            name="city"
            placeholder="City Location"
            className="w-full px-2.5 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-5">
        <div className="flex flex-col gap-0.5">
          <label htmlFor="type" className="text-xs">Type</label>
          <select
            name="type"
            id="type"
            className="w-24 px-2.5 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">any</option>
            <option value="buy">Buy</option>
            <option value="rent">Rent</option>
          </select>
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="property" className="text-xs">Property</label>
          <select
            name="property"
            id="property"
            className="w-24 px-2.5 py-2 border border-gray-300 rounded-md text-sm"
          >
            <option value="">any</option>
            <option value="apartment">Apartment</option>
            <option value="house">House</option>
            <option value="condo">Condo</option>
            <option value="land">Land</option>
          </select>
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="minPrice" className="text-xs">Min Price</label>
          <input
            type="number"
            id="minPrice"
            name="minPrice"
            placeholder="any"
            className="w-24 px-2.5 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="maxPrice" className="text-xs">Max Price</label>
          <input
            type="text"
            id="maxPrice"
            name="maxPrice"
            placeholder="any"
            className="w-24 px-2.5 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <div className="flex flex-col gap-0.5">
          <label htmlFor="bedroom" className="text-xs">Bedroom</label>
          <input
            type="text"
            id="bedroom"
            name="bedroom"
            placeholder="any"
            className="w-24 px-2.5 py-2 border border-gray-300 rounded-md text-sm"
          />
        </div>
        <button className="w-24 py-2 bg-yellow-400 border-none cursor-pointer rounded-md flex items-center justify-center">
          <img src="/search.png" alt="" className="w-6 h-6" />
        </button>
      </div>
    </div>
  );
}

export default Filter;
