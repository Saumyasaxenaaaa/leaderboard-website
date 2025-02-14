import React,{useState} from 'react'
import Modal from 'react-modal'
import { useDispatch } from 'react-redux';
import submitForm from '../Services/Actions/actions';
// import HomeContainer from '../containers/HomeContainer';

function Home(props) {
  console.log("props",props)
  const [visible,setVisible] =useState(false);
  const [formData,setFormData] = useState({
    name : '',
    score : ''
  });
  const dispatch = useDispatch();

  const [name,setName] = useState('');
  const [score,setScore] = useState('');
  

  const handleChange = (event) => {
    const {name,value} = event.target;
    setFormData({
      ...formData,
      [name]:value
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    let form = event.target;
    let formData = new FormData(form);
    let formDataObj = Object.fromEntries(formData.entries());
    
    if(formDataObj.name === '' || formDataObj.score === ''){
      alert('Please fill out all the fields');
      setVisible(false)
      return
      
    }
    dispatch(submitForm(formDataObj))
    setVisible(true);
    // setName('');
    // setScore('');
    setFormData({
      name : '',
      score : ''
    });
  };
  console.log(name,score)
  return (
    <div>
      {/* <img src="https://thumbs.dreamstime.com/b/cricket-8425524.jpg"></img> */}
      <div className='signForm'>
        <form onSubmit={handleSubmit}>
          <h1>Add Player</h1>
          <div className='inputBox'>
            <input type="text" placeholder='enter player name' name="name" value={formData.name} onChange={handleChange}></input>
          </div>

          <div className='inputBox'>
            <input type="text" placeholder='enter player score' name="score" value={formData.score} onChange={handleChange}></input>
          </div>

          <button type="submit" onClick={()=>setVisible(true)}>Submit</button>
          <Modal isOpen={visible} >
            <h1>Player added successfully...</h1>
            <button onClick={()=>setVisible(false)} style={{background:'black',color:'white',padding:'10px 20px',fontSize:'18px',margin:'10px',borderRadius:'4px',cursor:'pointer'}}>Close</button>
          </Modal>
        </form>
        
      </div>
    </div>
  )
}


export default Home

