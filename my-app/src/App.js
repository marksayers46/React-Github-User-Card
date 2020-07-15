import React from 'react';
import {UserCard} from "./Components/UserCard";
import {FriendList} from "./Components/FriendList";
import {Search} from "./Components/Search";
import './App.css';

class App extends React.Component {
  state = {
    data: {},
    followers: [],
    user: "marksayers46"
  }

  componentDidMount() {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then(res => res.json())
      .then(res => {
        console.log("MS: componentDidMount", res);
        this.setState({data: res})
      })
      .catch(err => console.log(err))
  }
  
  
  componentWillMount() {
    fetch(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => res.json())
      .then(res =>  {
        console.log("MS: componentWillMount", res);
        this.setState({followers: res})
      })
      .catch(err => console.log(err)); 
  }

  
  
  componentDidUpdate(prevProps, prevState) {
    if (this.state.user !== prevState.user) {
    fetch(`https://api.github.com/users/${this.state.user}`)
      .then(res => res.json())
      .then(res => {
        console.log("MS: componentDidUpdate", res);
        this.setState({data: res})
      })
      .catch(err => console.log(err));
  
      fetch(`https://api.github.com/users/${this.state.user}/followers`)
      .then(res => res.json())
      .then(res =>  {
        console.log("MS: fetch", res);
        this.setState({followers: res})
      })
      .catch(err => console.log(err));
  }}
  
  changeUser = login => {
    this.setState({
      user: login
    })
    console.log("MS: changeUser")
  }


  render() {
    return (
      <div classNAme="App">
        <UserCard data={this.state.data} />
        <FriendList followers={this.state.followers} changeUser={this.changeUser}/>
        <Search changeUser={this.changeUser}/>
      </div>
    );
  }
}

export default App;

