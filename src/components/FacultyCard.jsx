import "./FacultyGrid.css"

function FacultyCard({person}) {
    return ( 
    <div className="card rounded-9 facultyCard"> 
        <div className="text-start card-body">
        <h3 className="card-title fs-xlg">{person.name}</h3>
        <p>{person.title}</p>
        <p className="fs-md">{person.email}</p> 
        <span className="d-flex flex-wrap gap-1"><p className="badge badge-subtle theme-inverse text-align-start fs-md">{person.university}</p> </span>
        <div className="d-flex flex-wrap gap-1 fs-md">{person.tags.map(tag => <span className="badge badge-subtle theme-primary" key={tag}>{tag}</span>)}
        </div>
    </div>
    </div>
    )
 }

 export default FacultyCard