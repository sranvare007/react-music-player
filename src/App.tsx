import "./App.css";
import CategoriesBar from "./components/CategoriesBar";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className={`w-screen h-screen flex flex-col items-start`}>
      <NavBar />
      <CategoriesBar />
    </div>
  );
}

export default App;
