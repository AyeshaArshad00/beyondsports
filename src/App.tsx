import "./App.css";
import AppHeader from "./components/headers";
import Navigation from "./components/navigation";
import Results from "./components/results";
import Games from "./components/games";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <div className="container mx-auto text-red-600">
      <AppHeader />

      
      {/* <Results /> */}
      <Navigation />
      <Games />

    </div>
  );
}

export default App;
