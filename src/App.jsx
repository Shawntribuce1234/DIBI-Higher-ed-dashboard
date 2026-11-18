import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import './App.css'
import FacultyGrid from './components/FacultyGrid'

function App() {
  const [search, setSearch] = useState("");
  const faculty = [
  { name: "Sarah", title: "Machine Learning", email: "email", university: "no name uni", tags:["tag1"]},
  { name: "James", title: "Robotics", email: "email", university: "no name uni", tags:["tag1"] },
  { name: "Alex", title: "Cybersecurity", email: "email", university: "no name uni", tags:["tag1"]},
];
  const searchBarResults = faculty.filter(person => person["name"].toLowerCase().includes(search.toLowerCase()));
 
  return (
  <>
  <Header></Header>
  <SearchBar search={search} setSearch={setSearch}></SearchBar>
  <FacultyGrid searchBarResults={searchBarResults}></FacultyGrid>
  </>
  )
}

export default App;