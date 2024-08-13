import SearchBar from "../components/searchbar/Searchbar";
function HomePage() {
  return (
    <div className="flex h-full">
      <div className="flex-3">
        <div className="pr-24 lg:pr-12 md:pr-0 flex flex-col justify-center gap-12 h-full sm:justify-start">
          <h1 className="text-6xl lg:text-4xl">Find Real Estate & Get Your Dream Place</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos
            explicabo suscipit cum eius, iure est nulla animi consequatur
            facilis id pariatur fugit quos laudantium temporibus dolor ea
            repellat provident impedit!
          </p>
          <SearchBar />
          <div className="flex justify-between sm:hidden">
            <div className="flex flex-col items-center">
              <h1 className="text-4xl lg:text-3xl">16+</h1>
              <h2 className="text-lg font-light">Years of Experience</h2>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl lg:text-3xl">200</h1>
              <h2 className="text-lg font-light">Award Gained</h2>
            </div>
            <div className="flex flex-col items-center">
              <h1 className="text-4xl lg:text-3xl">2000+</h1>
              <h2 className="text-lg font-light">Property Ready</h2>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-2 bg-[#fcf5f3] relative flex items-center md:hidden">
        <img src="/bg.png" className="absolute right-0 w-[115%] lg:w-[105%]" alt="" />
      </div>
    </div>
  );
}

export default HomePage;
