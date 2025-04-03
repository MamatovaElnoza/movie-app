import React, { useState } from 'react'
import './search-panel.css'

// interface SearchPanelProps {
//   updateTermHandler: (term: string) => void;
// }

// interface SearchPanelState {
//   term: string;
// }

const SearchPanel = ({ updateTermHandler }) => {
  const [term, setTerm] = useState('')

  const handleUpdateTerm = (e) => {
    const term = e.target.value.toLowerCase()
    setTerm(term)
    updateTermHandler(term)
  }
  return (
    <input type="text" className="search-input form-control" placeholder="Search movies" onChange={handleUpdateTerm} value={term} />
  )
}

export default SearchPanel