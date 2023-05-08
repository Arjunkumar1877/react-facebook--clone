import './sidebar.css';
import RssFeedIcon from '@mui/icons-material/RssFeed';
import CommentIcon from '@mui/icons-material/Comment';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupsIcon from '@mui/icons-material/Groups';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import HelpIcon from '@mui/icons-material/Help';
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import EventNoteIcon from '@mui/icons-material/EventNote';
import SchoolIcon from '@mui/icons-material/School';
import CloseFriends from '../closefriends/CloseFriends';
import { user } from '../../dummyData';


export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <ul className="sidebarList">
          <li className="sidebarListitem">
            <RssFeedIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Feed</span>
          </li>

          <li className="sidebarListitem">
            <CommentIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Chats</span>
          </li>

          <li className="sidebarListitem">
            <PlayCircleIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">videos</span>
          </li>

          <li className="sidebarListitem">
            <GroupsIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Groups</span>
          </li>

          <li className="sidebarListitem">
            <BookmarkIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Bookmarks</span>
          </li>

          <li className="sidebarListitem">
            <HelpIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Questions</span>
          </li>

          <li className="sidebarListitem">
            <WorkOutlineIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Jobs</span>
          </li>

          <li className="sidebarListitem">
            <EventNoteIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Events</span>
          </li>

          <li className="sidebarListitem">
            <SchoolIcon className='sidebarIcon'/>
            <span className="sidebarListItemText">Courses</span>
          </li>
        </ul>
        <button className='sidebarButton'>Show More</button>
        <hr  className='sidebarHr'/>
        <ul className="sidebarFriendsList">
        {user.map((u)=>(
          <CloseFriends key={u.id} user={u}/>
        ))}
          </ul>
      </div>
    </div>
  )
}
