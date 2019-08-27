import React, { Component } from 'react';

class Gif extends Component {
  handleClick = () => {
    this.props.selectedGifFunction(this.props.id.id)
  }

  render() {
    const src = `https://media.giphy.com/media/${this.props.id}/giphy.gif`;
    return (
      <img src={src} className="gif" onClick={this.handleClick}/>
    )
  }
}

export default Gif;
