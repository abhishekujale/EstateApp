
function NewPostPage() {
  return (
    <div className="newPostPage flex h-screen">
      <div className="formContainer flex-3 overflow-auto p-8">
        <h1 className="text-3xl font-bold mb-6">Add New Post</h1>
        <div className="wrapper">
          <form className="flex flex-wrap gap-5">
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="title" className="font-medium">Title</label>
              <input
                id="title"
                name="title"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="price" className="font-medium">Price</label>
              <input
                id="price"
                name="price"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="address" className="font-medium">Address</label>
              <input
                id="address"
                name="address"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item description w-full h-80 flex flex-col gap-2">
              <label htmlFor="desc" className="font-medium">Description</label>
              <textarea
                id="desc"
                name="desc"
                className="p-5 border border-gray-400 rounded-md"
                rows="10"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="city" className="font-medium">City</label>
              <input
                id="city"
                name="city"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="bedroom" className="font-medium">Bedroom Number</label>
              <input
                min={1}
                id="bedroom"
                name="bedroom"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="bathroom" className="font-medium">Bathroom Number</label>
              <input
                min={1}
                id="bathroom"
                name="bathroom"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="latitude" className="font-medium">Latitude</label>
              <input
                id="latitude"
                name="latitude"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="longitude" className="font-medium">Longitude</label>
              <input
                id="longitude"
                name="longitude"
                type="text"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="type" className="font-medium">Type</label>
              <select name="type" className="p-5 border border-gray-400 rounded-md">
                <option value="rent" defaultChecked>Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="property" className="font-medium">Property</label>
              <select name="property" className="p-5 border border-gray-400 rounded-md">
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="utilities" className="font-medium">Utilities Policy</label>
              <select name="utilities" className="p-5 border border-gray-400 rounded-md">
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="pet" className="font-medium">Pet Policy</label>
              <select name="pet" className="p-5 border border-gray-400 rounded-md">
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="income" className="font-medium">Income Policy</label>
              <input
                id="income"
                name="income"
                type="text"
                placeholder="Income Policy"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="size" className="font-medium">Total Size (sqft)</label>
              <input
                min={0}
                id="size"
                name="size"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="school" className="font-medium">School</label>
              <input
                min={0}
                id="school"
                name="school"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="bus" className="font-medium">Bus</label>
              <input
                min={0}
                id="bus"
                name="bus"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <div className="item w-1/3 flex flex-col gap-2">
              <label htmlFor="restaurant" className="font-medium">Restaurant</label>
              <input
                min={0}
                id="restaurant"
                name="restaurant"
                type="number"
                className="p-5 border border-gray-400 rounded-md"
              />
            </div>
            <button className="sendButton w-1/3 rounded-md border-none bg-teal-500 text-white font-bold py-4 cursor-pointer hover:bg-teal-600">
              Add
            </button>
          </form>
        </div>
      </div>
      <div className="sideContainer flex-2 bg-[#fcf5f3] flex flex-col items-center justify-center gap-5">
        {/* You can add content or images here */}
      </div>
    </div>
  );
}

export default NewPostPage;
