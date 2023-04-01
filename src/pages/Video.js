import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import VideoSideBar from "./components/sidebar/VideoSideBar";
import "./Video.css";

function Video({ likes, shares, messages, name, description, song, url }) {
  const videoRef = useRef(null);

  const [playing, setPlaying] = useState(false);

  function handdleStart() {
    if (playing) {
      videoRef.current.pause();
      setPlaying(false);
    } else {
      videoRef.current.play();
      setPlaying(true);
    }
  }

  return (
    <div className="video">
      <video
        className="video__player"
        ref={videoRef}
        onClick={handdleStart}
        loop
        src= { url }
      ></video>
      <VideoSideBar 
        likes = { likes }
        shares = { shares }
        messages = { messages }
      />
      <VideoFooter 
        name = { name }
        description = { description }
        song = { song } 
      />
    </div>
  );
}

export default Video;
