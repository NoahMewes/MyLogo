import React, { useState, Component } from 'react';
import './tailwind.css';
import Images from './images.js'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Logo from './Components/Logo'
import { render } from '@testing-library/react';


class App extends Component {
  constructor(props){
    super(props);

    this.state = {  
      indexArr: [],
    }
    
    const setState = this.setState.bind(this);
  }



  componentDidMount() {

    for(let i = 0; i < 12; i++){
      this.setState(prev => {
        let obj = Object.assign({}, prev)
        obj.indexArr[i] = i
        return obj;
      })
     
    }
    
    this.myinterval = setInterval(() => {
      //Randomly Selected indexs that will be changed
      let selectIds = []
      //New Indexs that the previously selected will be changed to
      let newIds = []

      //Returns a unique random num from 0 to 12 
      const getRandNum = () => {
        const num = Math.floor(Math.random() * 12);
        if(!selectIds.includes[num]){
          return num
        }
        else{ 
          getRandNum() 
        }
      }
      
      //Puts 3 randomly selected indexes into the array
      for(let i = 0; i <3; i++){
        selectIds[i] = getRandNum()
      }
      for(let i = 0; i <3; i++){
        newIds[i] = getRandNum()
      }
      setTimeout(() => {
        
        this.setState(prev => {
        let obj = Object.assign({}, prev)
        for(let i = 0; i <3; i++){
          obj.indexArr[selectIds[i]] = newIds[i]
        }
        return obj;
      })},2000)
      
      
  
    },2000);

     

  }
  
  componentWillUnmount(){
    clearInterval(this.myinterval)
  }

  render(){
      return (
        <div className="App">
          <Header />  
        <div className="container mx-auto my-24 max-w-xl max-h-xl content-center">
          <div className="grid grid-cols-4 gap-4">
            {this.state.indexArr.map((key) => <Logo key= {this.state.indexArr[key]} index = {key} />)}  
          </div>
        </div>
        <Footer /> 
        </div>
      );
    }
}

export default App
