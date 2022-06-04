import { Player } from "./components/";
import { Footer } from "./components/";
import { Aside } from "./components/";
import "./assets/css/home.scss";
import { RightBox } from "./components/RightBox/RightBox";

function App() {
  return (
    <div className="root">
      <main className="app">
        <div className="flex">
          <RightBox />
        </div>
        <Footer />
      </main>
      <Player />
    </div>
  );
}

export default App;
