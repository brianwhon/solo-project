// const React = require('react');
import React, { Component } from 'react';
import { render } from 'react-dom'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      date: '',
      time: '',
      source: '',
      ingredients: '',
      mealLogs: [],
      bowelLogs: [],
      pDate: '',
      pTime: '',
      bRating: ''
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }

  handleSubmit(event) {
    let completeLog = this.state.date +
                      this.state.pDate +
                      ' ' +
                      this.state.time +
                      this.state.pTime +
                      ' ' +
                      this.state.source +
                      ': ' +
                      this.state.bRating +
                      this.state.ingredients;
    this.setState(prevState => ({
      mealLogs: [...prevState.mealLogs, completeLog],
      date: '',
      time: '',
      source: '',
      ingredients: '',
      pDate: '',
      pTime: '',
      bRating: ''
    }));
    event.preventDefault();
  }

  render() {
    let logs = this.state.mealLogs.map(meal => (
    <div>
      <h2>Log # {this.state.mealLogs.indexOf(meal) + 1}</h2>
      <Logs mealLogs = {meal} />
    </div>
    ));
    return (
      <div>
        <h2>Submit a meal: </h2>
        <form onSubmit={this.handleSubmit}>
          <label>Date:</label>
            <input type="text" name="date" value={this.state.date} onChange={this.handleChange} />
          <label>Time:</label>
            <input type="text" name="time" value={this.state.time} onChange={this.handleChange} />
          <label>Source:</label>
            <input type="text" name="source" value={this.state.source} onChange={this.handleChange} />
          <label>Ingredients:</label>
            <input type="text" name="ingredients" value={this.state.ingredients} onChange={this.handleChange} />
            <input type="submit" value="Submit" />
        <h2>Submit a BM:</h2>
        <label>Date:</label>
          <input type="text" name="pDate" value={this.state.pDate} onChange={this.handleChange} />
        <label>Time:</label>
          <input type="text" name="pTime" value={this.state.pTime} onChange={this.handleChange} />
        <label>Bristol Stool Rating:</label>
          <input type="text" name="bRating" value={this.state.bRating} onChange={this.handleChange} />
          <input type="submit" value="Submit" />
        </form>
        <h2>Input/Output Logs:</h2>
        <div id='main'>
          {logs}
        </div>
      </div>

    );
  };
};
//****************************//
class Logs extends Component {

  render() {
    return (
      <div className="logs">
        <h3>{this.props.mealLogs}</h3>
      </div>
    )
  }
}

render(<App />, document.getElementById('root'));

export default App;
