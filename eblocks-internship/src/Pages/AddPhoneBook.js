//function to add a new phone book
function AddPhoneBook(){
    return (
        <div>
            <div class="Center-Text">
                <div>
                    <h1>Add New Phone Book </h1>
                </div>
                <div className="InputContainer">
                    <div class="PNameInput">
                        <input type="text" name="name" id="name" class="PNameInput" placeholder="Name" autoComplete="off"></input>
                    </div> 
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

export default AddPhoneBook;