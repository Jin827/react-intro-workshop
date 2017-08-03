import React from 'react'

class NumberGuessing extends React.Component {
  constructor() {
    super();
    this.state= {

    }
  }

  _startGame() {
        this.setState({
        gameStatus: 'playing',
        numberToGuess: Math.floor(Math.random() * 99 + 1),
        guesses: []
        })
  }

  _handleButtonClick(e) {
    e.preventDefault();

    var guessNumer= +this.refs.userGuess.value
    this.refs.userGuess.value = ""
    var setNumber= +this.state.numberToGuess

    if(guessNumer = 0 || guessNumer > 100) {
       alert('You entered an invalid number.')
    } else {
    var currentGuess = this.state.guesses
    currentGuess.push(this.refs.userGuess.value)

    if(currentGuess.length <= this.props.limit) {
      if(guessNumer=== setNumber){
        this.setState({
          gameStatus: 'win',
          guesses: currentGuess
        })
        alert('Yayy You win !! :)')

      } else {
        this.setState({
          gameStatus: 'lose',
          guesses: currentGuess
        })
        alert('You lost, try it again! ')
        }
      }
    }
  }

  componentDidMount() {
    this._startGame();
  }



  render() {
    if(this.state.gameStatus === undefined){
      return null
    } else if(
      (this.state.guesses.length > this.props.limit) && (this.state.gameStatus === 'win' || this.state.gameStatus ==='lose')
    ){
      return(
        <form onSubmit={this._startGame.bind(this)}>
          <p>Click Restart to continue the game</p>
          <button type="submit">Restart!!!</button>
        </form>
      )
    } else {
      return (
        <form onSubmit={this._handleButtonClick.bind(this)}>
          Guess the number between 1 and 100 : <input type="text" ref="userGuess"/>
          <button type="submit">Click!!</button>
          <p>Numbers of tries left: {this.props.limit - this.state.guesses.length}</p>
        </form>
      )
    }
  }
}

export default NumberGuessing;
