import './App.css';
import React, { Component } from "react";
import NavBar from './components/navbar/NavBar';
import Footer from './components/footer/Footer';
import Welcome from './components/main/Welcome';
import LatestRelease from './components/main/LatestRelease';
import SearchBar from './components/search_bar/SearchBar';
import scifi from "./data/scifi.json";
import fantasy from "./data/fantasy.json";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { Category: scifi }
  }

  genereChange(input) {
    this.setState({Category: input});
    console.log(this.state);
    console.log(input)
  }
 
  

  searchBooks(event){
    const {Category} = this.state;
    this.setState({Category: fantasy});
    const filteredSearch = Category.filter((el) => {
      return el.title.toLowerCase().includes(event.target.value.toLowerCase())
    })
    this.setState({Category: filteredSearch});
    setTimeout(()=>{this.searchBooks()}, 1000)
  }

  render() {

    return (
      <>
        <NavBar onGenereChange={(input) => {this.genereChange(input)}}/>
        <Welcome />
        <SearchBar mySearch={(input) => {this.searchBooks(input)}}/>
        <LatestRelease cat={this.state.Category}/>
        <Footer />
      </>
    );
  }
}

export default App;
