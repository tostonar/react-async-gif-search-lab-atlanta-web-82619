import React from 'react';

const GifList = (props) => {
  const listItems = props.gifs.map(gif => {
    return <li><img src={gif} alt=""></img></li>
  })

  return (
    <ul>
        {listItems}
    </ul>
  )
}

export default GifList;