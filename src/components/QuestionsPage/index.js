import './index.css'

const QuestionsPage = props => {
  const {emojis, updateState} = props
  return (
    <div className="question-container">
      <h1 className="question-text">
        How satisfied are you with our customer support performance?
      </h1>
      <ul className="emojis-list">
        {emojis.map(each => {
          const {id, name, imageUrl} = each
          return (
            <li key={id} className="emoji-item">
              <button
                className="emoji-button"
                type="button"
                onClick={updateState}
              >
                <img src={imageUrl} alt={name} className="emoji" />
              </button>

              <p className="emoji-name">{name}</p>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

export default QuestionsPage
