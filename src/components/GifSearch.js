import React from 'react';

class GifSearch extends React.Component {
  state = {
    query: ""
  }

  handleChange = (e) => {
    this.setState({
      query: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.props.getGifs(this.state.query);

  }

  resetForm = () => {
    this.setState({query: ""})
  }


  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit} onReset={this.resetForm}>
          <label>Enter a Search Term:</label>
          <br></br>
          <input type="text" value={this.state.query} onChange={this.handleChange}></input>
          <button type="submit">Find Gifs</button>
        </form>
      </React.Fragment>
    )
  }

}

export default GifSearch;