import { Link } from "react-router-dom";

function Card({ item }) {
  return (
    <div className="flex gap-5">
      <Link to={`/${item.id}`} className="flex-2 h-48 hidden md:block">
        <img src={item.img} alt="" className="w-full h-full object-cover rounded-lg" />
      </Link>
      <div className="flex-3 flex flex-col justify-between gap-2.5">
        <h2 className="text-xl font-semibold text-gray-700 hover:text-black transition-transform duration-300 hover:scale-105">
          <Link to={`/${item.id}`}>{item.title}</Link>
        </h2>
        <p className="text-sm flex items-center gap-1.5 text-gray-500">
          <img src="/pin.png" alt="" className="w-4 h-4" />
          <span>{item.address}</span>
        </p>
        <p className="text-xl font-light px-2 py-1 bg-yellow-200 rounded-lg w-max">
          $ {item.price}
        </p>
        <div className="flex justify-between gap-2.5">
          <div className="flex gap-5 text-sm">
            <div className="flex items-center gap-1.5 bg-gray-100 p-1.5 rounded-lg">
              <img src="/bed.png" alt="" className="w-4 h-4" />
              <span>{item.bedroom} bedroom</span>
            </div>
            <div className="flex items-center gap-1.5 bg-gray-100 p-1.5 rounded-lg">
              <img src="/bath.png" alt="" className="w-4 h-4" />
              <span>{item.bathroom} bathroom</span>
            </div>
          </div>
          <div className="flex gap-5">
            <div className="border border-gray-400 p-0.5 px-1.5 rounded-lg cursor-pointer flex items-center justify-center hover:bg-gray-200">
              <img src="/save.png" alt="" className="w-4 h-4" />
            </div>
            <div className="border border-gray-400 p-0.5 px-1.5 rounded-lg cursor-pointer flex items-center justify-center hover:bg-gray-200">
              <img src="/chat.png" alt="" className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
