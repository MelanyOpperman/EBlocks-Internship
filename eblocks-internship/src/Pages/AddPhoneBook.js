import React, { useState } from "react";

function AddPhoneBook() {
  const [phoneBookName, setPhoneBookName] = useState('');

  const savePhoneBook = () => {
    if (phoneBookName) {
      fetch('http://localhost:3001/phonebookType')
        .then((response) => response.json())
        .then((data) => {
          const phoneBookNameLower = phoneBookName.toLowerCase();
          const duplicatePhoneBookName = data.some(item => item.phoneBook.toLowerCase() === phoneBookNameLower);
          if (duplicatePhoneBookName) {
            alert('This has been used already!');
          } else {
            const phoneIds = data.map((item) => item.id);
            const newId = Math.max(...phoneIds) + 1;
            const insertedPhoneBook = {
              id: newId,
              phoneBook: phoneBookName,
            };
            fetch('http://localhost:3001/phonebookType', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(insertedPhoneBook),
            })
              .then((response) => response.json())
              .then((data) => {
                alert('The phone book was saved!');
                setPhoneBookName('');
              })
              .catch((error) => {
                alert('Failed to save phone book!');
              });
          }
        })
        .catch((error) => {
          alert('Failed to fetch data!');
        });
    }
  };

  return (
    <div>
      {/* Your JSX content here */}
    </div>
  );
}

export default AddPhoneBook;

    return (
        <div>
            <div class="Center-Text">
                <div>
                    <h1>Add New Phone Book </h1>
                </div>
                <div className="InputContainer">
                    <div>
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