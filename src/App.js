import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      input: [],
      results: '',
      searchType: '',
    }
  }

  handleSubmit(e){
    e.preventDefault();
    console.log(e);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Searching Tree Traversal Drills</h1>
          <div className="results">
          </div>
        </header>
        <main role='main'>
          <div className="input-field">
          <form className="input-form">
            <textarea 
              className="array-input" 
              rows='10'
              cols='50'
              ></textarea>
            <button type="submit"
              value="linear-search" 
              className="linear-search"
              onClick={e => this.handleSubmit(e)}>Linear Search</button>
            <button type="submit" 
              value="binary-search" 
              className="binary-search"
              onClick={e => this.handleSubmit(e)}>Binary Search</button>
          </form>
          </div>
        
        </main>
      </div>
    );
  }
}

export default App;
