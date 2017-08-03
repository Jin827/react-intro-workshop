import React from 'react'

class GuessTheNumber extends React.Component {
  _handleButtonClick(e) {
    e.preventDefault();

    var guessNumer= +this.refs.userGuess.value
    var setNumber= +this.props.numberToGuess

    if(guessNumer=== setNumber){
      alert('You are correct :)')
    } else {
      alert('Wrong number, try it again! ')}
  }
  render() {
    return (
      <form onSubmit={this._handleButtonClick.bind(this)}>
        Guess the number : <input type="text" ref="userGuess"/>
        <button type="submit">Click!!</button>
      </form>
    )
  }
}

export default GuessTheNumber;
