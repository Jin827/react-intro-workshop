import React from 'react';

// will manage the user input, and will be aware of when the user clicked on the Go! button.
class GithubSearchForm extends React.Component {
  constructor(props) {
    super();
  }


  _handleSubmit = (e) => {
    e.preventDefault();

    // a child component is communicating to a parent component
    // using a function that was passed down to it as a prop.
    this.props.onSearch(this.refs.userInput.value)
  }

  render() {
    return (
      <form onSubmit={this._handleSubmit}>
        <p>Enter a GitHub username:</p>
        <input type="text" ref="userInput"/>
        <button>Go!</button>
      </form>
    );
  }
};

export default GithubSearchForm;
