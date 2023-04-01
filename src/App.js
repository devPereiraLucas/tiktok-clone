import "./App.css";
import Video from './pages/Video';

function App() {
  return (
    <div className="App">
      <div className="app__videos">
        <Video 
          likes={ 146 }
          shares={ 4 }
          messages={ 198 }
          name="lucas_pereira"
          description="#TattooDesenhoEmNeon"
          song="put ur head on my shoulder - cat"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
        <Video 
          likes={ 532 }
          shares={ 0 }
          messages={ 134 }
          name="lucas_pereira"
          description="#TattooDesenhoEmNeon"
          song="put ur head on my shoulder - cat"
          url="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/brecker2.mp4"
        />
      </div>
    </div>
  );
}

export default App;
