//menu function
function AddEntry(){
    return (
        <div >
            <nav class="Menu">
                <ul>
                    <li>
                        <a href="/">
                            Phonebook
                        </a>
                    </li>
                    <li>
                        <a href="/AddEntry">
                            Add Entry
                        </a>
                    </li>
                    <li>
                        <a href="/AddPhoneBook">
                            Add Phonebook
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default AddEntry;