import "./profile.css";
import Feed from "../../components/feed/Feed";
import Rightbar from "../../components/rightbar/Rightbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";

export default function Profile() {
  return (
    <>
      <Topbar />
      <div className="profile">
        <Sidebar />
        <div className="profileRight">
          <div className="profileRightTop">
            <div className="profileCover">
              <img
                src="./Assets/posts/6.png"
                alt=""
                className="profileCoverImg"
              />
              <img
                src="./Assets/posts/7.png"
                alt=""
                className="profileUserImg"
              />
            </div>
          </div>
          <div className="profileInfo">
            <h4 className="profileInfoName">Andrea Joseph</h4>
            <p className="profileInfoDecs">Hello my friends!</p>
          </div>
          <div className="profileRightBottom">
            <Feed />
            <Rightbar profile/>
          </div>
        </div>
      </div>
    </>
  );
}
