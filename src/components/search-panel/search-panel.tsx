import React, { Component } from 'react'
import './search-panel.css'

interface SearchPanelProps {
  updateTermHandler: (term: string) => void;
}

interface SearchPanelState {
  term: string;
}

class SearchPanel extends Component<SearchPanelProps, SearchPanelState> {
  constructor(props){
    super(props)
    this.state= {term: ''}
  }

  updateTermHandler = (e) => {
    const term = e.target.value.toLowerCase()
    this.setState({term})
    this.props.updateTermHandler(term)
  }

  render() {
    return (
      <input type="text" className="search-input form-control" placeholder="Search movies" onChange={this.updateTermHandler} value={this.state.term}/>
    )
  }
}

export default SearchPanel