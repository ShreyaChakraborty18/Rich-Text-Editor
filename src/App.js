import { useState } from 'react';
import './App.css';
import RichTextEditor from './Components/RichTextEditor';
import Header from './Components/Header/header';

function App() {
  const [value, setValue] = useState('')
  const getValue = (value) => {
    setValue(value);
  };
  return (
    <div className="App">
      <Header/>
      <div className="row">
        <div className="col-md-6" style={{margin: 'auto', marginTop: '50px'}}>
          <div style={{textAlign: 'center'}}>
            <h3>Type text in the box</h3>
          </div>
          <RichTextEditor initialValue="" getValue={getValue}/>
          <br/>
          <div>{value}</div>
        </div>
      </div>
    </div>
  );
}

export default App;
