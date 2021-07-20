import React from "react";
import "./App.css";

const api = {
  key: "8a489eff0aeb124a757471cc717287de",
  base: "https://home.openweathermap.org/data/2.5/",
};

function App() {
  return (
    <div className="App">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..." />
        </div>
      </main>
    </div>
  );
}

export default App;
