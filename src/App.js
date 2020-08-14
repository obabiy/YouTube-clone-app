import React from "react";
import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import RecomendedVideos from "./RecommendedVideos";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="app__page">
        <Sidebar/>
        <RecomendedVideos/>
      </div>
    </div>
  );
}

export default App;
