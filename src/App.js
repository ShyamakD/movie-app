import MovieMain from './Components/MovieMain';
import PropTypes from 'prop-types'
import {useState} from 'react';

function App() {

const [message,setmessage]=useState('');
const[place,setplace] = useState("Search MovInfo")
const [checkinpu,setcheckinpu] = useState(true);
  const checkinput = event => {
    setmessage(event.target.value)
  };

  const handleClick= () => {
    setcheckinpu(false)
  }

  const handleclear = () => {
    setcheckinpu(true)
    setplace("Search MovInfo")
  }
  return (
    <>
      <h1 className='d-flex align-items-center justify-content-center my-4'>MovInfo</h1>
      <div className='container d-flex align-items-center justify-content-center'>    
      <form className="" role="search" style={{width:500}}>
        <input className="form-control me-2" onChange={checkinput} placeholder= {place} type="search" aria-label="Search" style={{backgroundColor:"#5bccf6", color:"white"}}/>
      </form>
      <button className='btn btn-light mx-3'onClick={handleClick}  style={{backgroundColor:"#5bccf6"}} type="button">Search</button>
      </div>
      {!checkinpu ? <> <div className='container d-flex align-items-center justify-content-center' onClick={handleclear}> <button className='btn btn-light my-2 '  style={{backgroundColor:"#5bccf6"}}type="button">Clear</button> </div> <MovieMain title={message}></MovieMain> </>: <h2 className='d-flex align-items-center justify-content-center my-3'>Enter the title</h2>}
    </>
  );
}

export default App;
