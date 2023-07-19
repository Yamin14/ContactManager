
import SearchBar from './components/SearchBar';
import AddButton from './components/AddButton';
import ContactsList from './components/ContactsList';
import NewContactEnter from './components/NewContactEnter';
import NewNumberEnter from './components/NewNumberEnter';
import 'bootstrap/dist/css/bootstrap.min.css';
import {useState} from 'react';


function App() {

  const [names, setNames] = useState([]);
  const [nums, setNums] = useState([]);

  //add new contact
  const [newName, setNewName] = useState("");
  const [newNum, setNewNum] = useState("");
  const [searched, setSearched] = useState("");

  const handleClick = () => {
    if (newName != "" && newNum != "") {
      setNames([...names, newName]);
      setNums([...nums, newNum]);
    }
  }

  //update typed name and number
  const handleNameChange = (name) => {
     setNewName(name);
  }

  const handleNumberChange = (num) => {
      setNewNum(num);
  }

  const handleSearch = (sth) => {
    setSearched(sth);
  }

  const handleDel = (i) => {
    setNames(names.slice(0, i).concat(names.slice(i+1)));
    setNums(nums.slice(0, i).concat(nums.slice(i+1)));
  }


  //return
  return (
    <div className='text-center bg-dark p-3'>
      <h1 className='text-center mb-3 py-2 bg-dark text-light border'>Contact Manager</h1>
      <NewContactEnter onChange={handleNameChange} />
      <NewNumberEnter onChange={handleNumberChange} />
      <AddButton onClick={handleClick} /><br/>
      <SearchBar onChange={handleSearch} /><br/>
      <ContactsList contacts={names} contactNums={nums} searchedWord={searched} onDel={handleDel}/>

      <footer className='text-center text-light bg-dark'>
        Developed By Yamin
      </footer>
    </div> 
  );

}

export default App
