import FilterSelection from "./FilterSelection"
import './FilterSection.css'
function FilterSection({researchers}) {
    const universities = [...new Set(researchers.map(person => person.University).filter(university => university != null))]
    const expertise = [...new Set(researchers.flatMap(person => person.Expertise_categories).filter(expertise => expertise != null))]
    const dibi_pilar = [...new Set(researchers.flatMap(person => person.Dibi_Pillar).filter(dibi_pilar => dibi_pilar != null))]
    const city = [...new Set(researchers.map(person => person.City).filter(city => city != null))]
    const tags = [...new Set(researchers.flatMap(person => (person.Other_tags ?? "").split(",").map(tag => tag.trim()).filter(Boolean)))]


    return (
        <div className="m-5 filter-container">
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
