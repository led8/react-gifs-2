import React, { Component } from 'react';

import Gif from './gif.jsx';

class GifList extends Component {
  render() {
    const gifs = this.props.gifs;
    return (
      gifs.map(gif =>  <Gif id={gif} key={gif} selectedGifFunction={this.props.selectedGifFunction}/>)
    )
  }
}

export default GifList;
