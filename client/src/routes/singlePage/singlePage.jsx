import "./singlePage.scss";
import Slider from "../../components/slider/Slider";
import Map from "../../components/map/Map";
import { singlePostData, userData } from "../../lib/dummydata";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";
function SinglePage() {
  const post = useLoaderData();
  const {currentUser}=useContext(AuthContext);
 if (!currentUser) {
      navigate("/login");
    }

   if (!post) {
    return <div>Loading...</div>;
   }
  console.log(post.data)
  console.log(post.data.post)
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.data.post.images} />
          {
console.log(post.data.post)
          }
          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.data.post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="" />
                  <span>{post.data.post.address}</span>
                </div>
                <div className="price">$ {post.data.post.price}</div>
              </div>
              <div className="user">
                <img src={currentUser.avatar} alt="" />
                <span>{currentUser.username}</span>
              </div>
            </div>
            <div className="bottom" dangerouslySetInnerHTML={{ __html: post.data.post.title }}/>

          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">{post.data.post.title}</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="" />
              <div className="featureText">
                <span>Utilities</span>
               {post.data.post.utilities=="owner"?<p> Owner is responsible</p>:<p>Rental is responsible </p>}
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Pet Policy</span>
               {post.data.post.pet=="allowed"?<p> pet allowed</p>:<p>Owner dont allow </p>}
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Property Fees</span>
                <p>Must have 3x the rent in total household income</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="" />
              <span>{post.data.post.size} sqft</span>
            </div>
            <div className="size">
              <img src="/bed.png" alt="" />
              <span>{post.data.post.bedroom} beds</span>
            </div>
            <div className="size">
              <img src="/bath.png" alt="" />
              <span>{post.data.post.bathroom} bathroom</span>
            </div>
          </div>
          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/school.png" alt="" />
              <div className="featureText">
                <span>School</span>
                <p>{post.data.post.school}m away </p>
              </div>
            </div>
            <div className="feature">
              <img src="/pet.png" alt="" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>{post.data.post.bus}m away</p>
              </div>
            </div>
            <div className="feature">
              <img src="/fee.png" alt="" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>{post.data.post.restaurant}m away</p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post.data.post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="" />
              Send a Message
            </button>
            <button>
              <img src="/save.png" alt="" />
              Save the Place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SinglePage;
