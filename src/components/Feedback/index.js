import {Component} from 'react'
import QuestionsPage from '../QuestionsPage'
import ThanksPage from '../ThanksPage'
import './index.css'

class Feedback extends Component {
  state = {emojiClicked: false}

  updateState = () => {
    this.setState({emojiClicked: true})
  }

  render() {
    const {emojiClicked} = this.state
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    return (
      <div className="main-bg-container">
        {emojiClicked ? (
          <ThanksPage loveEmojiUrl={loveEmojiUrl} />
        ) : (
          <QuestionsPage emojis={emojis} updateState={this.updateState} />
        )}
      </div>
    )
  }
}

export default Feedback
