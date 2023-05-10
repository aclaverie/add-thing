import './App.css';
import Button from '@mui/material/Button';
import { useState } from 'react';

function App() {
  const [arrayItems, setArrayItems] = useState(["Item 1", "Item 2"]);

  function AddingItem(){
    setArrayItems((prevArrayItems)=>{
      return [...prevArrayItems, `Item ${prevArrayItems.length+1}`]
    });
  }
  function SubtractingItem(){
    setArrayItems((prevArrayItems)=>{
      let modifiedArray = Array.from(prevArrayItems)
      if(modifiedArray.length === 0){

      } else {
        modifiedArray.length = modifiedArray.length - 1
      }
      return modifiedArray;
    });
  }

  function ClearItems(){
    setArrayItems([]);
  }

  const displayItems = arrayItems.map((item)=>{
    return ( <p key={item}>{item}</p> );
  });

  return (
    <div className="App">
      <header className="App-header">
        Add Items Exercise
      </header>
      <div className="App-main">
        <div className="App-btn">
          <Button  
            style={{color: 'white', border: '1px solid #ffffff'}}
            variant="outlined" onClick={AddingItem}>Add Item</Button>
          <Button  
            style={{color: 'white', border: '1px solid #ffffff'}}
            variant="outlined" onClick={SubtractingItem}>Subtract Item</Button>
          <Button 
            style={{color: 'white', border: '1px solid #ffffff'}}
            variant="outlined" onClick={ClearItems}>Clear Items</Button>
        </div>
        <div>
          { displayItems }
        </div>
      </div>
      <div className="App-footer">
        <div className="footer-info">
          Powered By React!
        </div>
      </div>
    </div>
  );
}

export default App;
