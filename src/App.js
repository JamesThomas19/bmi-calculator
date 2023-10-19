import React, {useState} from 'react'
import './index.css'

function App() {

  // state

  const[weight,setWeight] = useState(0)
  const[height,setHeight] = useState(0)
  const[bmi,setBmi] = useState('')
  const[message,setMessage] = useState('')

  

  let calcBmi = (event) => {
    // prevent
    event.preventDefault();
    
    if ( weight === 0 || height === 0) {
      alert('Please enter a valid weight and height,')
    } else {
      let bmi = (weight / (height * height ) * 783 )
      setBmi(bmi.toFixed(1))


      // logic for message.
      if(bmi < 25) {
        setMessage('You are underweight.')
      }else if (bmi >= 25 && bmi <= 30) {
        setMessage('You are healthy.')
      } else {
        setMessage('You are over-weight.')
      }
    }
  }

  // show message 
  let imgSrc;

  if (bmi < 1) {
    imgSrc = null
  } else {
    if(bmi < 25) {
      imgSrc = require('../src/assets/underweight.png')
    } else if (bmi >= 25 && bmi < 30) {
      imgSrc = require('../src/assets/healthy.png')
    } else {
      imgSrc = require('../src/assets/overweight.png')
    }
  }



  let reload = () => {
    window.location.reload()
  }

  const weightHandler = (e) => {
    setWeight(e.target.value)
  }

  const heightHandler = (e) => {
    setHeight(e.target.value)
  }

  return (
    <div className="app">
      <div className='container'>
        <h2 className='center'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>

          <div>
            <label>Weight (lbs)</label>
            <input value={weight} onChange={weightHandler} />
          </div>

          <div>
            <label>Height (in)</label>
            <input value={height} onChange={heightHandler} />
          </div>

          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' type='submit' onClick={reload}>Reload</button>
          </div>

        </form>

        <div className='center'>
          <h3>Your BMI is :{bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt='' ></img>
        </div>

      </div>
    </div>
  );
}

export default App;
