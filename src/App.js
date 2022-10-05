import "./App.css";
import Dictionary from "./Dictionary";
import React, { Suspense } from "react";

const Meaning = React.lazy(() => import("./Meaning"));
const Phonetic = React.lazy(() => import("./Phonetic"));
const Photos = React.lazy(() => import("./Photos"));
const Results = React.lazy(() => import("./Results"));
const Synonyms = React.lazy(() => import("./Synonyms"));

export default function App() {
  return (
    <div>
      <div>
        <Suspense fallback={<div>Loading...</div>}>
          <section>
            <Meaning />
            <Phonetic />
            <Photos />
            <Results />
            <Synonyms />
          </section>
        </Suspense>
      </div>
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
