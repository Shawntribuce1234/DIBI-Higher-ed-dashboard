import FacultyCard from "./FacultyCard";

function FacultyGrid({searchBarResults}) {
    return (
            <div className= "row g-1 row-cols-3 row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-7 h-6">
                {searchBarResults.map(person => <div className="col"  key={person.name}> <FacultyCard person={person}></FacultyCard></div>)}
            </div>
        
    )
}


export default FacultyGrid;   