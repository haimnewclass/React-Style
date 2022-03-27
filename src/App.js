import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import './my.scss';
function App() {
  const [state,setState] = useState('aaa');
  return (
    <div className="App">
     <div style={{display:'block',width:'200px',backgroundColor:'red'}}>
       Btn
     </div>
     {
       //<div class="aaa ccc"   className={`${state} ccc`} onClick={()=>{ 
     }
     <div className={`${state} ccc`} onClick={()=>{
       if(state==='aaa')
          setState('bbb');
        else
          setState('aaa');

     }}>
       Btn2
     </div>
     <div className='ddd'>
      Click
     </div>
     <div className='ggg'>
      Click
     </div>
    </div>
  );
}

export default App;
