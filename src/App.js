import {useState} from 'react'
import data from './helper/data';
import './App.css';
//import Loading from './components/Loading';
import {SpinnerInfinity} from 'spinners-react'

function App() {
  const[userData,setUserData]=useState(data)
  const[isLoading,setIsLoading]=useState(true)

  setTimeout(()=>{
  setIsLoading(false)
  },2000)
   return (
    <div>
    <h1> Marvel Heroes</h1>
   
    {isLoading ? (
        <SpinnerInfinity
          className="spinner"
          size={100}
          thickness={172}
          speed={100}
         // color="rgba(172, 57, 100, 0.85)"
         color="#1c2b75"
        />
      ) : (
        <div className="container">
     {
       userData.map((data)=>{
         return(
           <div className='cards'>
               <img src={data.img}/>
           <h3>{data.name}</h3>
           <h4>{data.film_name}</h4>
           <p>{data.appearance}</p>
                    </div>
           
         )
       })
     }
      </div>
      )}
      
      </div>
  );
}

export default App;
