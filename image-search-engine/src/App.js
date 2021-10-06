import React, { Component } from "react";
import ImagesContainer from "./Components/ImagesContainer/ImagesContainer";
import SearchEngine from "./Components/Search-engine/SearchEngine";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: "",
      apiImages: [],
      hasLoaded: false,
    };
  }

  searchInput = (value) => {
    this.setState(
      {
        searchValue: value,
      },
      () => {
        this.consultApi();
      }
    );
  };

  consultApi = () => {
    const url = `https://pixabay.com/api/?key=23728241-be8eb94c6b7952df05e1f6966&q=${this.state.searchValue}&per_page=30`;
    fetch(url)
      .then((response) => response.json())
      .then((data) => this.setState({ apiImages: data.hits, hasLoaded: true }));
  };

  render() {
    const { apiImages, hasLoaded } = this.state;
    return (
      <>
        <div className="app container">
          <div className="jumbotron">
            <p className="lead text-center">Search Image</p>
            <SearchEngine searchInput={this.searchInput} />
          </div>
          {hasLoaded && (
            <div>
              <ImagesContainer apiImages={apiImages} />
            </div>
          )}
        </div>
      </>
    );
  }
}
export default App;
