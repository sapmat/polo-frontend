import BottomBar from "./Components/BottomBar";
import CenterBody from "./Components/CenterBody";
import TopBar from "./Components/TopBar";
import "./App.css";

function App() {
  return (
    <div className="app">
      <TopBar />
      <CenterBody />
      <BottomBar />
    </div>
  );
}

export default App;
