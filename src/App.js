import React, { Component } from 'react'
import Slider from './components/slider'
import "./components/slider.scss";
import './App.css'
import Data from './components/sliderdata'

export class App extends Component {
  constructor(props){
        super(props)
        this.state={
            currentIndex : 0
        }
  }
  componentDidMount(){
    this.timer=setInterval(() => this.moveSlide(),5000)
  }
  moveSlide(){
      if(this.state.currentIndex === Data.length-1){
         this.setState({
            currentIndex:0
         })
      }else{
          this.setState({
            currentIndex: this.state.currentIndex+1
          })
      }

  }
  render() {
    return (
      <div className='App'>
          <div className='slider-container'>
               <Slider currentIndex= {this.state.currentIndex}/>
          </div>
      </div>
    )
  }
}

export default App