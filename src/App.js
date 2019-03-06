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
    }
  }

  handleSubmit = (e) => {
    //Is to grab the textarea value AND the search type
    //Thought: Put handleSubmit on form
    e.preventDefault();
    //Below is the value of the textArea
    let value = e.currentTarget[0].value;
    this.setState({
      input: value
    })
    
  }

  linearSearch = (arr, key) => {
    
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
