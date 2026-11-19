import FilterSelection from "./FilterSelection"

function FilterSection({faculty}) {
    const universities = [...new Set(faculty.map(person => person.university).filter(university => university !== undefined))]
    const expertise = [...new Set(faculty.flatMap(person => person.expertise).filter(expertise => expertise !== undefined))]
    const dibi_pilar = [...new Set(faculty.flatMap(person => person.dibi_pilar).filter(dibi_pilar => dibi_pilar !== undefined))]
    const city = [...new Set(faculty.map(person => person.city).filter(city => city !== undefined))]
    const tags = [...new Set(faculty.flatMap(person => person.tags).filter(tags => tags !== undefined))]


    return (
        <div className="m-5">
            <div className="row" >
                <div className="col">
                    <FilterSelection label={"universities"} options={universities}></FilterSelection>
                </div>
                <div className="col">
                    <FilterSelection label={"expertise"} options={expertise}></FilterSelection>
                </div>
                <div className="col">
                    <FilterSelection label={"DIBI Pillar"} options={dibi_pilar}></FilterSelection>
                </div>
                <div className="col">
                    <FilterSelection label={"City"} options={city}></FilterSelection>
                </div>
                <div className="col">
                    <FilterSelection label={"tag"} options={tags}></FilterSelection>
                </div>
            </div>
    </div>

    )
}

export default FilterSection