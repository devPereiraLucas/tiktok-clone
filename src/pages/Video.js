import React, { useRef, useState } from "react";
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
        src="https://webapp-va.tiktok.com/d6ca904fffe028c8461b5353f3e1446f/64252318/kmoat/tos-maliva-ve-0068c800-us/8f509a9b28514ea28543990cf7c0ba9e?a=1988&ch=0&cr=0&dr=0&lr=tiktok_m&cd=0%7C0%7C0%7C0&br=2716&bt=1358&cs=0&ds=6&ft=Ap6JtBiTq8ZmoHKeCc_vjj~D8AhLrus&mime_type=video_mp4&qs=0&rc=NXZpTGRTaFBnKWZzZXpoaGRmNjo3ZWg7ZTppOjY1PDs8OEBpMzU7NmQ6ZjdkNzMzNzczM0BTbGt2aXFEOmpoXitiK2p0OiM2Xy0vYTAvX2AxYi40LS4xYSNmYV5jcjRnaWFgLS1kMTZzcw%3D%3D&btag=80000&dpk=v9Ge3R23%2FyWORujBrO3UBQou6ejgkkm1%2FqldPCj4qrXfbblAAcGtHzlh0BwiJHc%2BYQKCGNG3KArEHqnu0rk%2FQdJ7DVdVdfwyhDRlIQ%3D%3D&dpm=cenc-aes-ctr&l=20230329235007825B4659B7B301814885&ply_type=3&policy=eyJ2bSI6MywidWlkIjoiNjg2MTI4NTgxNDY2NDUxMjUxNyJ9"
      ></video>
    </div>
  );
}

export default Video;
