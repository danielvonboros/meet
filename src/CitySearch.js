import React, { Component } from "react";

import {InfoAlert} from './Alert';

class CitySearch extends Component {
  constructor(props){
    super(props);
  

  this.state = {
    query: "",
    suggestions: [],
    showSuggestions: undefined,
    infoText:'',
  
  };
}

  componentDidMount() {
    console.log(this)
  }

  componentDidUpdate() {
    console.log(this)
  }

  handleInputChanged = (event) => {
    const value = event.target.value;
    const suggestions = this.props.locations.filter((location) => {
      return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
    });
    if (suggestions.length === 0) {
      this.setState({
        query: value,
        // infoText: 'We can not find the city you are looking for. Please try another city',
      });
      this.props.onNoCityFound();
    } else {
    this.props.onCityFound();
    return this.setState({ query: value, suggestions, 
      // infoText:''
     });
  }
  };

  handleItemClicked = (suggestion) => {
    this.setState({ query: suggestion, showSuggestions: false, infoText:'' });
    this.props.onCityFound();
    this.props.updateEvents(suggestion);
  };

  render() {
    return (
      <div className="CitySearch">
        <InfoAlert text={this.state.infoText} />
        <input
          type="text"
          className="city"
          placeholder="Enter a City"
          value={this.state.query}
          onChange={this.handleInputChanged}
          onFocus={() => {
            this.setState({ showSuggestions: true });
          }}
        />
        <ul
          className="suggestions"
          style={this.state.showSuggestions ? {} : { display: "none" }}
        >
          {this.state.suggestions.map((suggestion) => (
            <li
              key={suggestion}
              onClick={() => this.handleItemClicked(suggestion)}
            >
              {suggestion}
            </li>
          ))}
          <li key="all" onClick={() => this.handleItemClicked("all")}>
            <b>See all cities</b>
          </li>
          <li style={{color:'red'}}>{this.state.infoText}</li>
        </ul>
      </div>
    );
  }
}

export default CitySearch;
