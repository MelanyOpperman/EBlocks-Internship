//function to add people to specific phone books
function AddEntry(){
    return (
        <div>
            <div class="Center-Text">
                <div>
                    <h1>Add New Entry </h1>
                </div>
                <div class="PhoneDropDown">
                <select name="Phone" id="Phone">
                    <option value="Home">Home</option>
                    <option value="Work">Work</option>
                    <option value="School">School</option>
                </select>
                </div>
                <div className="InputContainer">
                    <input type="text" name="name" id="name" className="NameInput" placeholder="Name" autoComplete="off"/>
                    <input type="text" name="number" id="number" className="NumberInput" placeholder="Number" autoComplete="off"/>
                </div>
                <div class="ButtonContainer">
                    <div class="SaveButton">
                        <button type="button">SAVE</button>
                    </div>
                    <div class="CancelButton">
                        <button type="button">CANCEL</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AddEntry;