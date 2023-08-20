//Importing any files or libraries needed
import './App.css';
import AddEntry from './Pages/AddEntry';
import AddPhoneBook from './Pages/AddPhoneBook';
import Menu from './Menu';
import Search from './Pages/Search';

function App() {
  let Page;

  switch(window.location.pathname) {
    case "/":
      Page = Search;
      break;
    case "/AddEntry":
      Page = AddEntry;
      break;
    case "/AddPhoneBook":
      Page = AddPhoneBook;
      break;
      default: 
        break;
  }
  return (
    <div>
      <Menu/>
      <Page/>
    </div>
  );
}

export default App;
