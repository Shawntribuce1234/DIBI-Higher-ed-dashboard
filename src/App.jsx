import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import './App.css'

function App() {
  const [search, setSearch] = useState("");
  const faculty = [
  { name: "Sarah", expertise: "Machine Learning" },
  { name: "James", expertise: "Robotics" },
  { name: "Alex", expertise: "Cybersecurity" }
];
  const searchBarResults = faculty.filter(person => person["name"].toLowerCase().includes(search.toLowerCase()));
 
  return (
  <>
  <Header></Header>
  <SearchBar search={search} setSearch={setSearch}></SearchBar>
  </>
  )
}

export default App;