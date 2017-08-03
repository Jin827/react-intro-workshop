import React from 'react'

class YouClicked extends React.Component {
constructor() {
  super();
  this.state= {
    timesClicked: 0
  }
  this._handleClick = this._handleClick.bind(this)
  this._resetClick = this._resetClick.bind(this)
}

_handleClick() {
  this.setState({
    timesClicked: +this.state.timesClicked +1
  })
}
_resetClick() {
  this.setState({
    timesClicked: 0
  })
}

render() {
  var times = +this.state.timesClicked
  return(

     <div>
        <button onClick={this._handleClick} type="submit">Click Click Click</button>
        <button onClick={this._resetClick} type="submit">Reset</button>
          <p>
          {
          times === 0 ? "You have not clicked the button":
          times === 1 ? "You have clicked the button once":
          times === 2 ? "You have clicked the button twice":
          `You have clicked ${+this.state.timesClicked} times`
          }

          </p>
      </div>
  )
}

}

export default YouClicked;
