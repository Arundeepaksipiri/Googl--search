// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionList, search} = props
  const {suggestion} = suggestionList
  const onSearch = () => {
    search(suggestion)
  }
  return (
    <li className="list-item">
      <p className="para">{suggestion}</p>
      <button className="button-item" onClick={onSearch}>
        <img
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
          className="arrow-icon"
        />
      </button>
    </li>
  )
}
export default SuggestionItem
