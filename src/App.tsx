import "./App.css";
import AppHeader from "./components/headers";
import Matches from "./components/matches";
import Navigation from "./components/navigation";
import Results from "./components/results";
import AppFooter from "./components/footer";

function App() {
  return (
    <div className="container mx-auto text-red-600">
      <AppHeader />
      <Results />
      <Navigation />
      <Matches />
      <AppFooter />

    </div>
  );
}

export default App;
