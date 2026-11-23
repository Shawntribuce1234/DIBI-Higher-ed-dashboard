
function SearchBar ({search, setSearch}) {
    return (
    <>
    <div className="m-5">
        <input className = "form-control rounded-pill " placeholder="Search faculty..." value = {search} onChange={(event) => setSearch(event.target.value)} />
        <p>You searched for {search}</p>
    </div>
    </>
    )

}

export default SearchBar; 