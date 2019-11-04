import React from 'react';
import GifList from '../components/GifList';
import GifSearch from '../components/GifSearch';
let query = '';
let gifUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;

class GifListContainer extends React.Component {
  state = {
    images: []
  }

  getGifs = (search) => {
    query = search;
    gifUrl = `https://api.giphy.com/v1/gifs/search?q=${query}&api_key=dc6zaTOxFJmzC&rating=g`;
    fetch(gifUrl)
    .then(resp => resp.json())
    .then(data => {
      const firstThree = data.data.slice(0,3);
      const imageUrls = firstThree.map(e => e.images.original.url);
      this.setState({
        images :  imageUrls
      })
     }
    )
  }

  render() {
    return (
      <div>
        <GifSearch  getGifs={this.getGifs} />
        <GifList  gifs={this.state.images} />
      </div>
    )
  }

}

export default GifListContainer;