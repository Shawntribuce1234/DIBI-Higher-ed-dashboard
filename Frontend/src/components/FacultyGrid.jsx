import FacultyCard from "./FacultyCard";
import "./FacultyGrid.css";

function FacultyGrid({searchBarResults}) {
    return (
            <div className= "row g-1 row-cols-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-7 h-100">
                {searchBarResults.map(person => <div className="col"  key={person.Researcher_ID}> <FacultyCard person={person}></FacultyCard></div>)}
            </div>
        
    )
}


export default FacultyGrid;   