import React from 'react'

class CharacterCounter extends React.Component {
  constructor() {
    super();
    this.state = {
      currentInput: ""
    }
  }

  _handleInput(event) {
    event.preventDefault();

    if(event.target.value.length <= +this.props.limit){
    this.setState({
      currentInput: event.target.value
      })
    }
  }

  render() {
    return(
      <div>
        <p>Twitter</p>
        <input type="text" value={this.state.currentInput} onInput={this._handleInput.bind(this)}/>
        {this.state.currentInput.length}
      </div>
    )
  }
}
export default CharacterCounter;
