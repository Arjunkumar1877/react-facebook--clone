import './rightbar.css';
import { user } from '../../dummyData';
import Online from '../online/Online';

export default function Rightbar({profile}) {
  const HomeRightbar = ()=>{
    return(
      <>
      <div className="birthdayContainer">
          <img src="./Assets/gift.jpg" alt="" className="birthdayImg" />
          <span className="birthdayText"><b>Libin  A S</b> and <b>3 other friends</b> have birthday today..</span>
        </div>
        <img src="./Assets/posts/post3.png" alt="" className="rightbarAd" />
        <h4 className="rightbarTitle">Online Friends</h4>
        <ul className="rightbarFriendList">
        {user.map((u)=>(
          <Online key={u.id} user={u}/>
        ))}
        </ul>
      </>
    )
  }

  const ProfileRightbar = ()=> {
    return (
      <>
        <h1 className="rightbarTitle">User Information</h1>
        <div className="rightbarInfo">
          <div className="rightbarInfoItem">
            <span className="infoKey">City:</span>
            <span className="infoValue">New York</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="infoKey">From:</span>
            <span className="infoValue">Madrid</span>
          </div>

          <div className="rightbarInfoItem">
            <span className="infoKey">Relashionship:</span>
            <span className="infoValue">Single</span>
          </div>
        </div>
        <h4 className="rightbarTitle">User Friends</h4>
        <div className="rightbarFollowings">
          <div className="rightbarFollowing">
            <img
              src="./Assets/posts/5.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src="./Assets/posts/2.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src="./Assets/posts/1.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src="./Assets/posts/8.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src="./Assets/posts/7.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>

          <div className="rightbarFollowing">
            <img
              src="./Assets/posts/6.png"
              alt=""
              className="rightbarFollowingImg"
            />
            <span className="rightbarFollowingName">John Carter</span>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className='rightbar'>
      <div className="rightbarWrapper">
        {profile ? <ProfileRightbar/> : <HomeRightbar/>}
      </div>
    </div>
  )
}
