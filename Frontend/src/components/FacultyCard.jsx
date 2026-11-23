import "./FacultyGrid.css"

function FacultyCard({person}) {
    const tags = (person.Other_tags ?? "").split(',').filter(Boolean);
    return ( 
    <div className="card rounded-9 facultyCard"> 
        <div className="text-start card-body">
        <h3 className="card-title fs-lg">{person.Name}</h3>
        <p className="fs-sm">{person.Title}</p>
        <p className="fs-sm">{person.Email}</p> 
        <span className="d-flex flex-wrap gap-1"><p className="badge badge-subtle theme-inverse text-align-start fs-xs">{person.University}</p> </span>
        <div className="d-flex flex-wrap gap-1 fs-sm">{tags.map(tag => <span className="badge badge-subtle theme-primary" key={tag}>{tag}</span>)}
        </div>
    </div>
    </div>
    )
 }

 export default FacultyCard