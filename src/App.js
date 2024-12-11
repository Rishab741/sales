import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import MilestoneGroup from "./components/MilestoneGroup";
import SidePanel from "./components/SidePanel";
import MenuBar from './components/MenuBar';
import "./App.css";

function App() {
  return (
    <div className="app">
      <Sidebar />
      <SidePanel />
      <div className="main-content">
        <Header />

        <div className="content">
          <h1>Demo Project: August 2024</h1>
          <MenuBar />
          <button className="add-milestone-button">Add Milestone Group</button>
          <div className="milestone-groups">
            <MilestoneGroup />
            <MilestoneGroup />
            <MilestoneGroup />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
