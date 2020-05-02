import React, { Component } from 'react'
import axios from 'axios'
import './App.css'

export default class App extends Component {

  state = {
    advice: ''
  }
  componentDidMount(){
    this.adviceSlip()
  }


  adviceSlip = () => {

    axios.get('https://api.adviceslip.com/advice')
   
    .then((response) => {
      const advice = response.data.slip.advice
      this.setState({
        advice
      })
      
    })
    .catch((error) =>{
      console.log(error);
      
    })
  }

  
  render() {
    const advice = this.state.advice
    return (
      <div className="app">
        <div className="card">
          <h1 className="heading">{advice}</h1>
          <button className="button" onClick={this.adviceSlip}>
            <span>give me advice!</span>
          </button>
        </div>
         
      </div>
    )
  }
}


