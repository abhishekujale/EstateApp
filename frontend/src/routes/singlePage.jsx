import Slider from "../components/slider/Slider";
import Map from "../components/map/Map";
import { singlePostData, userData } from "../lib/dummydata";

function SinglePage() {
  return (
    <div className="singlePage flex h-screen">
      <div className="details flex-3 overflow-y-scroll h-full md:flex-none md:h-auto md:mb-12">
        <div className="wrapper pr-12 lg:pr-5 md:pr-0">
          <Slider images={singlePostData.images} />
          <div className="info mt-12">
            <div className="top flex justify-between sm:flex-col sm:gap-5">
              <div className="post flex flex-col gap-5">
                <h1 className="font-normal text-2xl">{singlePostData.title}</h1>
                <div className="address flex items-center gap-2 text-gray-600 text-sm">
                  <img src="/pin.png" alt="" className="w-4 h-4" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price p-2 bg-yellow-200 rounded-md text-lg font-light">
                  $ {singlePostData.price}
                </div>
              </div>
              <div className="user flex flex-col items-center justify-center gap-5 p-5 rounded-lg bg-yellow-100 font-semibold sm:p-5">
                <img src={userData.img} alt="" className="w-12 h-12 rounded-full object-cover" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom mt-12 text-gray-600 leading-6">
              {singlePostData.description}
            </div>
          </div>
        </div>
      </div>
      <div className="features flex-2 bg-[#fcf5f3] h-full overflow-y-scroll md:flex-none md:h-auto md:mb-12">
        <div className="wrapper px-5 flex flex-col gap-5 md:px-5">
          <p className="title font-bold text-lg mb-2">General</p>
          <div className="listVertical bg-white p-5 rounded-lg flex flex-col gap-5">
            <div className="feature flex items-center gap-2">
              <img src="/utility.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-bold">Utilities</span>
                <p className="text-sm">Renter is responsible</p>
              </div>
            </div>
            <div className="feature flex items-center gap-2">
              <img src="/pet.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-bold">Pet Policy</span>
                <p className="text-sm">Pets Allowed</p>
              </div>
            </div>
            <div className="feature flex items-center gap-2">
              <img src="/fee.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-bold">Property Fees</span>
                <p className="text-sm">Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title font-bold text-lg mb-2">Sizes</p>
          <div className="sizes flex justify-between">
            <div className="size bg-white p-2 rounded-md flex items-center gap-2">
              <img src="/size.png" alt="" className="w-6 h-6" />
              <span>80 sqft</span>
            </div>
            <div className="size bg-white p-2 rounded-md flex items-center gap-2">
              <img src="/bed.png" alt="" className="w-6 h-6" />
              <span>2 beds</span>
            </div>
            <div className="size bg-white p-2 rounded-md flex items-center gap-2">
              <img src="/bath.png" alt="" className="w-6 h-6" />
              <span>1 bathroom</span>
            </div>
          </div>
          <p className="title font-bold text-lg mb-2">Nearby Places</p>
          <div className="listHorizontal bg-white p-5 rounded-lg flex justify-between">
            <div className="feature flex items-center gap-2">
              <img src="/school.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-bold">School</span>
                <p className="text-sm">250m away</p>
              </div>
            </div>
            <div className="feature flex items-center gap-2">
              <img src="/bus.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-bold">Bus Stop</span>
                <p className="text-sm">100m away</p>
              </div>
            </div>
            <div className="feature flex items-center gap-2">
              <img src="/restaurant.png" alt="" className="w-6 h-6" />
              <div className="featureText">
                <span className="font-bold">Restaurant</span>
                <p className="text-sm">200m away</p>
              </div>
            </div>
          </div>
          <p className="title font-bold text-lg mb-2">Location</p>
          <div className="mapContainer w-full h-52">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons flex justify-between">
            <button className="flex items-center gap-2 py-5 px-6 bg-white border border-yellow-400 rounded-md cursor-pointer">
              <img src="/chat.png" alt="" className="w-4 h-4" />
              Send a Message
            </button>
            <button className="flex items-center gap-2 py-5 px-6 bg-white border border-yellow-400 rounded-md cursor-pointer">
              <img src="/save.png" alt="" className="w-4 h-4" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
