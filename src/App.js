import "./App.css";
import CopyApp from "./components/CopyApp";
import FocusApp from "./components/FocusApp";
import MediaPlayer from "./components/MediaPlayer";

function App() {
  return (
    <div className="App">
      <h1>React App: Test components</h1>
      <FocusApp />
      <CopyApp />
      <MediaPlayer />
    </div>
  );
}

export default App;
