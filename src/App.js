import React, { Component, PropTypes } from 'react';
import logo from './logo.svg';
import TextField from 'lucid-ui/TextField';
import Button from 'lucid-ui/Button';
import './App.css';

const style = {
	marginBottom: '10px'
};

export class Query extends Component {

  render() {

    const { query } = this.props;
    let rows = [];
    for(var index = 0; index < 1000; index++) {
    rows.push(<div key={index} className="comment">
        <span>{query}</span>
      </div>);
    }
    return (
      <div style={{display: 'none'}} className="comments">
      {rows}
      </div>
    )

  }

}

Query.propTypes = {
  query: PropTypes.string.isRequired
}


class App extends Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      value : 'foo'
    };
  };
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <div>
  				<TextField
  					style={style}
  					value={this.state.value}
  					onChange={(value) => this.setState({value})}
  				/>

  				<div style={style}>this.state.value: {this.state.value}</div>
          <Query query={this.state.value} />

  				<Button onClick={() => { this.setState({ value: 'foo' }); }}>
  					Set TextField to "foo"
  				</Button>
  			</div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
