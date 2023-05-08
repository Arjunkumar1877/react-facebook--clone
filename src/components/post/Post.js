import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {  user } from '../../dummyData';
import { useState } from 'react';


export default function Post({post}) {
    console.log(user);

    const [like, setlike] = useState(post.like);
    const [islike,setislike] = useState(false);

    const liked =()=>{
        setlike(islike ? like-1 : like+1);
        setislike(!islike);
    }
  return (
    <div className="post">
        <div className="postWrapper">
            <div className="postTop">
                <div className="postTopLeft">
                    <img src={user.filter((u)=>u.id === post?.userId)[0].profilePicture} alt="" className="postProfileImg" />
                    <span className="postUsername">
                        {user.filter((u)=>u.id === post?.userId)[0].username}
                    </span>
                    <span className="postDate">{post.date}</span>
                </div>
                <div className="postTopRight">
                    <MoreVertIcon/>
                </div>
            </div>
            <div className="postCenter">
                <span className="postText">{post.desc}</span>
                <img src={post.photo} alt="" className="postImg" />
            </div>
            <div className="postBottom">
                <div className="postBottomLeft">
                    <img src="./Assets/like.png" alt="" className="likeIcon" onClick={liked}/>
                    <img src="./Assets/love.png" alt="" className="likeIcon" onClick={liked}/>
                    <span className="postLikeCounter">{ like } people like it</span>
                </div>
                <div className="postBottomRight">
                    <span className="postCommentText">{ post.comment } comments</span>
                </div>
            </div>
        </div>
    </div>
  )
}
  