import React, { Component } from "react";
import ImagesContainer from "./Components/ImagesContainer/ImagesContainer";
import SearchEngine from "./Components/Search-engine/SearchEngine";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: "",
      searchValue: "",
      apiImages: [],
      hasLoaded: false,
    };
  }

  scroll = () => {
    const element = document.querySelector(".jumbotron");
    element.scrollIntoView("mooth", "end");
  };

  previousPage = () => {
    let page = this.state.page;
    if (page === 1) return;
    this.setState(
      {
        page: page - 1,
      },
      () => {
        this.consultApi();
        this.scroll();
      }
    );
  };

  nextPage = () => {
    let page = this.state.page;
    this.setState(
      {
        page: page + 1,
      },
      () => {
        this.consultApi();
        this.scroll();
      }
    );
  };

  searchInput = (value) => {
    this.setState(
      {
        searchValue: value,
        page: 1,
      },
      () => {
        this.consultApi();
      }
    );
  };

  consultApi = () => {
    const { searchValue, page } = this.state;
    const url = `https://pixabay.com/api/?key=23728241-be8eb94c6b7952df05e1f6966&q=${searchValue}&per_page=20&page=${page}`;
    if (this.state.searchValue)
      fetch(url)
        .then((response) => response.json())
        .then((data) =>
          this.setState({ apiImages: data.hits, hasLoaded: true })
        );
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
              <ImagesContainer
                apiImages={apiImages}
                prev={this.previousPage}
                next={this.nextPage}
              />
            </div>
          )}
        </div>
      </>
    );
  }
}
export default App;
