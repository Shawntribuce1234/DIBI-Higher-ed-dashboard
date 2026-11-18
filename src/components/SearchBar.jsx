
function SearchBar ({search, setSearch}) {
    return (
    <>
    <input className = "form-control rounded-pill" placeholder="Search faculty..." value = {search} onChange={(event) => setSearch(event.target.value)} />
    <p>You searched for {search}</p>
    </>
    )

}

export default SearchBar; 