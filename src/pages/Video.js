import React, { useRef, useState } from "react";
import VideoFooter from "./components/footer/VideoFooter";
import "./Video.css";

function Video() {
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
        src="https://webapp-va.tiktok.com/3bd1558c3d4fd9623a0d90931a2d171f/64268e2d/kmoat/tos-maliva-ve-0068c800-us/8f509a9b28514ea28543990cf7c0ba9e?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2716&bt=1358&cs=0&ds=6&ft=Ap6JtBiTq8ZmoCihCc_vjefx8AhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKWZzZXpoaGRmNjo3ZWg7ZTppOjY1PDs8OEBpMzU7NmQ6ZjdkNzMzNzczM0BTbGt2aXFEOmpoXitiK2p0OiM2Xy0vYTAvX2AxYi40LS4xYSNmYV5jcjRnaWFgLS1kMTZzcw%3D%3D&btag=80000&dpk=1ZDTrxoBP7cOtzxQOoNJe6zUhbxahPrLw%2FIsEIF9Hqxmyglq3N%2FLYiqQrv%2B3AXXilxz8GrIbyaquG%2FGSz9DtAL07PSQEUZvlEqwcjQ%3D%3D&dpm=cenc-aes-ctr&l=20230331013916E6D475EFB205F50426B4&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNjg2MTI4NTgxNDY2NDUxMjUxNyJ9"
      ></video>
      <VideoFooter />
    </div>
  );
}

export default Video;
