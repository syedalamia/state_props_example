import './App.css';
import MyComponent from './MyComponent'

import {useState} from 'react';

function App() {

const [myInfo, setState] = useState({
  pagename: '',
  phone: ''
});

//updating my setstate
const clickingButton =(mitu,ritu)=> {
  setState({
    pagename:mitu,
    phone:ritu
  })
  
};


  return (
    <>
    <button onClick={()=>clickingButton('home','018')}>HOME</button>
    <br></br>
    <button onClick={()=>clickingButton('contact','019')}>CONTACT</button>

  {
    myInfo.pagename==='home' && <MyComponent pageName ={myInfo.pagename} calling={myInfo.phone}/>

  }
  {
     myInfo.pagename==='contact' && <MyComponent pageName ={myInfo.pagename} calling={myInfo.phone}/>
  }
    </>
  );
}

export default App;
