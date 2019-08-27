import React, { Component } from 'react';

import SearchBar from './search-bar.jsx';
import Gif from './gif.jsx';
import GifList from './gif-list.jsx';

import giphy from 'giphy-api';
const GIPHY_API_KEY = '1KMPHCBIOe3hOjJwCJQX49sRc6cM0oIm';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {gifs: [], selectedGifId: 'mGK1g88HZRa2FlKGbz'}
  }

  search = (query) => {
    giphy({ apiKey: GIPHY_API_KEY, https: true })
      .search({
        q: query,
        rating: 'g',
        limit: 10
      }, (err, result) => {
          this.setState({gifs: result.data})
      });
  }

  selectedGif = (id) => {
    this.setState({selectedGifId: id})
  }

  render() {
    return (
      <div>
        <div className= "left-scene">
          <SearchBar searchFunction={this.search} />

          <div className= "selected-gif">
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>

        <div className= "right-scene">
          <div className= "gif-list">
            <GifList gifs={this.state.gifs} selectedGifFunction={this.selectedGif} />
          </div>
        </div>
      </div>
    )
  }
}

export default App;
