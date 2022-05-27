
import Navbar from "./Navbar";
import {data} from "./data";
import Movietracker from "./Movietracker"
import "../index.css"
function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main">
        <div className="tabs">
          <div className="tab"> Movies</div>
          <div className="tab"> Favourites </div>
        </div>
        <div className="Movies-list">
            {data.map((movie) => (
              <Movietracker movie = {movie}  />
            ))}
        </div>
      </div>
    </div>

  );
}

export default App;

