import React, { useState } from 'react'
import "./VideoSideBar.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import MessageIcon from '@mui/icons-material/Message';
import ShareIcon from '@mui/icons-material/Share';

function VideoSideBar({ likes, shares, messages }) {
  const [liked, setLiked] = useState(false)

  const handleLike = () => {
    setLiked(!liked)
  }
  
  return (
    <div className="video__sidebar">
      <div 
        className="video__sidebar__options"
        onClick={handleLike}
      >
        { liked 
          ? <FavoriteIcon className="" fontSize="large"/> 
          : <FavoriteBorderIcon className="" fontSize="large"/>
        }
        <p>{liked ? likes + 1 : likes}</p>
      </div>
      <div className="video__sidebar__options">
        <MessageIcon className="" fontSize="large"/>
        <p>{messages}</p>
      </div>
      <div className="video__sidebar__options">
        <ShareIcon className="" fontSize="large"/>
        <p>{shares}</p>
      </div>
    </div>
  )
}

export default VideoSideBar