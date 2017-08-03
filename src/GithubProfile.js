import React from 'react'

class GithubProfile extends React.Component {
  constructor(props) {
    super();
    this.state = {}
  }

  //
  componentDidUpdate(prevProps) {
    console.log(prevProps, "the prevProps")
    if(prevProps.username !== this.props.username){
      this.fetchData();
    }
  }
  //


  fetchData = () => {
    console.log(this.props.username, "the user name props")
    fetch(`https://api.github.com/users/${this.props.username}`)
      .then(response=> response.json())
      .then(data=> {
        //console.log(data)

          this.setState({
          name: data.name,
          bio: data.bio,
          avatar_url: data.avatar_url,
          user: data.login
          })

      })
      // when the username prop of GithubProfile get updated for the second time, new AJAX call is not triggered from  componentDidMount()
      // When a component's props change, Its current DOM is modified instead (don't get re-mounted in the DOM), using the result of the latest call to render
      // When this happens, another React Component lifecycle method gets called: componentDidUpdate
    }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    if(!this.state.user){
      return(
        <h3>Loading...</h3>
      )

    }
    return(
      <div className="github-user">
        <img className="github-user__avatar" src={this.state.avatar_url} alt={this.state.name}/>
        <div className="github-user__info">
          <p>{this.state.name}</p>
          <p>{this.state.bio}</p>
        </div>
       </div>
     )

  }
}

export default GithubProfile;
