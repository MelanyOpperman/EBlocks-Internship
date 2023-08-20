//function to search for a person
function Search(){
    return (
        <div>
            <div class="Center-Text">
                <div class="PhoneDropDown">
                <select name="Phone" id="Phone">
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="School">School</option>
                </select>
                </div>
                <div class="InputContainer">
                    <div class="FilterInput">
                        <input type="text" name="filter" id="filter" class="filter" placeholder="Filter" autoComplete="off"></input>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Search;