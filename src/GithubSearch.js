import React from 'react';
import GithubProfile from './GithubProfile';
import GithubSearchForm from './GithubSearchForm';

class GithubSearch extends React.Component {
  constructor() {
    super();
    this.state = {};

    this._handleSearch = this._handleSearch.bind(this)
  }


_handleSearch(searchTerm) {

  console.log(searchTerm,"searchTerm: this.refs.userInput.value")
  this.setState({ user: searchTerm })

  // 1. this.setState will trigger a re-render of your GithubSearch component
  // 2. this.state.user will be set to the value that was in the form, When it gets re-rendered
  // 3. The value will be used by render {this.state.user ?...}
  // 4. Since user is now set, render will output a GithubProfile component and its componentDidMount function will be called.
  // 5. It will do its AJAX call and output the user box

}


  render() {
    //console.log(this.state.user, "the user state")
    return (
      <div>
        <GithubSearchForm onSearch={this._handleSearch} />
        {this.state.user ? <GithubProfile username={this.state.user}/> : null}
      </div>
    );
  }
};

export default GithubSearch;
