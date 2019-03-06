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
    let inputValue = e.currentTarget[0].value;
    console.log(e.currentTarget[1].value);
    let keyValue = e.currentTarget[1].value;
    this.setState({
      input: inputValue,
      key: keyValue
    })
  }

  linearSearch = (arr, key) => {
    for(let x = 0; x < arr.length; x++){
      if(arr[x] === key){
        return `Key is at ${x} index`
      }
    }
    return 'Key is not present in input'
  }

  handleClick = (e) => {
    console.log(this.props);
    console.log(e.target.value);
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
          <Linear props={this.state} />
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
            <input type='text' className='key'>Key</input>
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
