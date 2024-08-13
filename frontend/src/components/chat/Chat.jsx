import { useState } from "react";

function Chat() {
  const [chat, setChat] = useState(true);

  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 flex flex-col gap-5 overflow-y-scroll">
        <h1 className="font-light">Messages</h1>
        {[...Array(6)].map((_, index) => (
          <div key={index} className="bg-white p-5 rounded-lg flex items-center gap-5 cursor-pointer">
            <img
              src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
              className="w-10 h-10 rounded-full object-cover"
            />
            <span className="font-bold">John Doe</span>
            <p>Lorem ipsum dolor sit amet...</p>
          </div>
        ))}
      </div>

      {chat && (
        <div className="flex-1 bg-white flex flex-col justify-between">
          <div className="bg-yellow-300 p-5 font-bold flex items-center justify-between">
            <div className="flex items-center gap-5">
              <img
                src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                className="w-8 h-8 rounded-full object-cover"
              />
              John Doe
            </div>
            <span className="cursor-pointer" onClick={() => setChat(null)}>X</span>
          </div>

          <div className="h-80 overflow-y-scroll p-5 flex flex-col gap-5">
            {[...Array(10)].map((_, index) => (
              <div key={index} className={`flex flex-col gap-2 ${index % 2 === 0 ? 'self-end text-right' : ''}`}>
                <p>Lorem ipsum dolor sit amet</p>
                <span className="text-xs bg-yellow-300 p-1 rounded-md">1 hour ago</span>
              </div>
            ))}
          </div>

          <div className="border-t-2 border-yellow-300 flex items-center justify-between h-15 p-2">
            <textarea className="flex-3 h-1/2 border-none p-5 flex justify-center items-center text-center" placeholder="Type a message..."></textarea>
            <button className="flex-1 bg-yellow-300 h-1/2 border-none cursor-pointer">Send</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Chat;
