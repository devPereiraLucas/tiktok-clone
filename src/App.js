import React, { useEffect, useState } from "react";
import "./App.css";
import Video from './pages/Video';
import db from './config/firebase';
import { collection, getDocs } from 'firebase/firestore/lite';

function App() {

  const [video, setVideos] = useState([]);

  async function getVideos() {
    const videosCollection = collection(db, 'videos');
    const videosSnapShot = await getDocs(videosCollection);
    const videosList = videosSnapShot.docs.map(doc => doc.data());
    setVideos(videosList);
  }

  useEffect(() => {
    getVideos();
  }, []);

  return (
    <div className="App">
      <div className="app__videos">
        { video.map((item) => {
            return (
              <Video 
                likes={ item.likes }
                shares={ item.shares }
                messages={ item.messages }
                name={ item.name }
                description={ item.description }
                song= { item.song }
                url=  { item.url }
              />
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
