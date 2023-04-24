import './index.css'

const ThanksPage = props => {
  const {loveEmojiUrl} = props
  return (
    <div className="thanks-container">
      <img src={loveEmojiUrl} alt="love emoji" className="love-emoji" />
      <h1 className="thanks-text">Thank You!</h1>
      <p className="thanks-description">
        We will use your feedback to improve our customer support performance
      </p>
    </div>
  )
}

export default ThanksPage
