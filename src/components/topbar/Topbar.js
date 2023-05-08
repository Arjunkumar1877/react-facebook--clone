import "./topbar.css";
import  SearchIcon  from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import InsertCommentIcon from '@mui/icons-material/InsertComment';
import NotificationsIcon from '@mui/icons-material/Notifications';






export default function Topbar() {
  return (
    <div className="topbarContainer">
      <div className="topbarLeft">
        <span className="logo">FB</span>
      </div>
      <div className="topbarCenter">
        <div className="searchbar">
            <SearchIcon className="searchIcon"/>
            <input placeholder="Search for friends post or videos" className="searchInput" />
        </div>
      </div>
      <div className="topbarRight">
        <div className="topbarLinks">
            <span className="topbarLink">Homepage</span>
            <span className="topbarLink">Timeline</span>
        </div>
        <div className="topbarIcons">
            <div className="topbarIconItem">
              <PersonIcon/>
              <span className="topbarIconBadge">1</span>
            </div>
            <div className="topbarIconItem">
              <InsertCommentIcon/>
              <span className="topbarIconBadge">7</span>
            </div>
            <div className="topbarIconItem">
            <NotificationsIcon/>
              <span className="topbarIconBadge">4</span>
            </div>
        </div>
        <img src="./Assets/prof/prof9.png" alt="" className="topbarImg" />
      </div>
    </div>
  );
}
