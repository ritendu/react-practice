import { useEffect, useState } from "react";
import "./App.css";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Submenu from "./components/Submenu";

function App() {
return (
<>
<Navbar></Navbar>
<Sidebar></Sidebar>
<Hero></Hero>
<Submenu></Submenu>
</>
)
}

export default App;
