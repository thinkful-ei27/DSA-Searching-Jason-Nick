import React, { Component } from 'react';
import './App.css';
//import Linear from './components/linear.js';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: [],
      results: '',
      searchType: '',
      key: ''
    }
  }

  handleSubmit = (e) => {
    //Is to grab the textarea value AND the search type
    //Thought: Put handleSubmit on form
    e.preventDefault();
    //Below is the value of the textArea
    console.log(e.currentTarget[0].value);
    let tempValue = e.currentTarget[0].value.split(' ');
    let inputValue = tempValue.map(number => Number(number));
    inputValue.sort((a, b) => a - b);
    console.log('============', inputValue);
    console.log(e.currentTarget[1].value);
    let keyValue = e.currentTarget[1].value;
    let results = this.binarySearch(inputValue, keyValue)
    this.setState({
      input: inputValue,
      key: keyValue,
      results: results
    })
  }

  linearSearch = (arr, key) => {
    for(let x = 0; x < arr.length; x++){

      if(arr[x] === key){
        return `${key} is at index ${x} after ${x + 1} iterations`
      }
    }
    return `${key} is not present in input`
  }

  binarySearch = (arr, key, counter = 1, start=0, end=arr.length) => {
    console.log(`start is ${start}`);
    console.log(`end is ${end}`);
    let middle = Math.floor((start + end) / 2);
    if(arr[middle] === key){
      return middle;
    } else if (arr[middle] > key){
      counter++;
      return this.binarySearch(arr, key, counter, start, middle-1);
    } else if (arr[middle] < key){
      counter++;
      return this.binarySearch(arr, key, counter, middle+1, end);
    } else if (start > end){return `${key} not found after ${counter} iterations`}
    return `${key} is at ${middle} index after ${counter} iterations`
  }

  handleClick = (e) => {
    let value = e.target.value;
    this.setState({
      searchType: value
    })
  }

  returnState = () => {
    let inputReturn = this.state.input;
    let searchReturn = this.state.searchType;
    return(
      <div>
        <p>{inputReturn}</p>
        <p>{searchReturn}</p>
      </div>
    )
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Searching Tree Traversal Drills</h1>
          <div className="results">
             {this.state.results}
          </div>
        </header>
        <main role='main'>
          <div className="input-field">
          <form onSubmit={this.handleSubmit} className="input-form">
            <textarea 
              className="array-input" 
              rows='10'
              cols='50'
              ></textarea>
            <input type='text' className='key'></input>
            <button type="submit"
              onClick={this.handleClick}
              value="linear-search" 
              className="linear-search"
              >Linear Search</button>
            <button onClick={this.handleClick} type="submit" 
              value="binary-search" 
              className="binary-search"
              >Binary Search</button>
          </form>
          </div>
        
        </main>
      </div>
    );
  }
}

export default App;
