import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import Header from './components/Header'
import SearchBar from './components/SearchBar'
import './App.css'
import FacultyGrid from './components/FacultyGrid'
import FilterSection from './components/FilterSection'
import { useEffect } from 'react'

function App() {
  
  
  const [researchers, setResearchers] = useState([]);
  useEffect(()=>{async function getResearchers(){const response = await fetch('http://localhost:3000/researchers'); 
                                                  const researcher = await response.json();
                                                setResearchers(researcher)}getResearchers()}, []);
  const [search, setSearch] = useState("");
  const searchBarResults = researchers.filter(person => person["Name"].toLowerCase().includes(search.toLowerCase()));
  console.log(researchers);
  console.log(researchers[0]?.Other_tags);
  console.log(typeof researchers[0]?.Other_tags);
  console.log(Array.isArray(researchers[0]?.Other_tags));
  return (
  <>
  <Header></Header>
  <SearchBar search={search} setSearch={setSearch}></SearchBar>
  <FilterSection researchers={researchers}></FilterSection>
  <FacultyGrid searchBarResults={searchBarResults}></FacultyGrid>
  </>
  )
}

export default App;