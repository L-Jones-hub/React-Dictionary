import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div>
      
      <div className="App">
        <h1>Dictionary App</h1>
        <div className="container">
          <header className="App-header"></header>
          <main>
            <Dictionary />
          </main>
          <footer className="text-center">
            <a href="https://github.com/L-Jones-hub">Open-Source Code</a> by
            Lindsey Jones
          </footer>
        </div>
      </div>
    </div>
  );
}
