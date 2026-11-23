import {useState} from "react";
import './FilterSelection'
function FilterSelection({label, options=[]}) {
    const [click, setClick] = useState(false)
    const [search, setSearch] = useState("")
    const [checkbox_items, setCheckbox] = useState([])
    
    return (
        <div> 
            <button className="form-control combobox-toggle" type="button" onClick={() => setClick(!click)}>
                    <div className="combobox-value">{label}</div>
                    </button>
                    
                    {click && <div className="filter-dropdown">
                        <input type="text" className="form-control combobox-search-input" placeholder="Search" autoComplete="on" value={search} 
                        onChange={(event)=> setSearch(event.target.value)}/>
                        {options.filter(option => option.toLowerCase().includes(search.toLowerCase())).map(selected_item => <label className="filter-option" key={selected_item}><input type="checkbox" col="3" 
                            checked={checkbox_items.includes(selected_item)} onChange={() => setCheckbox((previousState) => previousState.includes(selected_item)
                            ? (previousState.filter(checkbox_items => checkbox_items !== selected_item)) 
                            : ([...previousState, selected_item]))
                 }/> {selected_item}</label>)}</div>}

                        
        </div>
    ) 
}
export default FilterSelection