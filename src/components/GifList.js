import React from 'react';

const GifList = (props) => {
  const listItems = props.gifs.map(gif => {
    return <li><img key={gif} src={gif} alt="gof"></img></li>
  })

  return (
    <ul>
        {listItems}
    </ul>
  )
}

export default GifList;