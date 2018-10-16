import React, { Component } from 'react';
import { SEARCH_LABEL } from './../../constants';

class Search extends Component {
  state = {
    search: ""
  };
  onChangeInput = (event) => {
    let {value} = event.target;
    this.setState({search: value});
  } 
  render() {
    return (
      <div className="col-12 mb-3 bg-light p-3">
        <form className="form-inline">
          <div className="form-group">
            <input className="form-control pr-4"
              data-test="search-input"
              value={this.state.search}
              type="text"
              onChange={this.onChangeInput}
              placeholder={SEARCH_LABEL}/>
          </div>
          <div className="form-group">
            <div className="btn-group">
              <span className="ml-2 btn btn-light text-primary dropdown-toggle">
                Categoria
              </span>
            </div>
          </div>
          <button className="btn btn-primary ml-2">Buscar</button>
        </form>
      </div>
    )
  }
}

Search.propTypes = {}

export default Search;
