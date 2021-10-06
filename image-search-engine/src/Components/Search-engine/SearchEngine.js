import React, { Component } from "react";

class SearchEngine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: "",
    };
  }

  handleInput = (e) => {
    this.setState({
      inputValue: e.target.value,
    });
  };

  handleSubmit = (e) => {
    const { searchInput } = this.props;
    searchInput(this.state.inputValue);
    this.setState({
      inputValue: "",
    });
    e.preventDefault();
  };

  render() {
    const { inputValue } = this.state;
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="row">
          <div className="form-group col-md-8">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Search your image Ex: Beach"
              onChange={this.handleInput}
              value={inputValue}
            />
          </div>
          <div className="form-group col-md-4">
            <input
              type="submit"
              className="btn btn-lg btn-danger btn-block"
              value="Search"
            />
          </div>
        </div>
      </form>
    );
  }
}

export default SearchEngine;
