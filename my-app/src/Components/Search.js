import React from "react";

export class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {       
            search: [],
            searchText: "",
            user:""
            }
    }

    handleChanges = e => {
        this.setState({
            searchText: e.target.value
        })
        if (this.state.searchText === "") {
            this.setState({
                search: []
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            user: this.state.searchText
        })  
    }

    handleClick = (e) => {
        this.props.changeUser(e.target.value);
        this.setState({
            searchText:"",
            search: []
        })
    }
    
    componentDidUpdate(prevProps, prevState){
        if (this.state.user !== prevState.user) {
        fetch(`https://api.github.com/search/users?q=${this.state.user}`)
        .then(res => res.json())
        .then(res =>  {
          console.log(res.items)
          this.setState({search: res.items})
        })
        .catch(err => console.log(err))
    }}


    render() {
        return(
            <div>
                <form >
                    <input
                        onChange={this.handleChanges}
                        type="text"
                        name="search"
                        value={this.state.searchText}
                        className="search"
                        placeholder="Search Users"
                    />
                    <button onClick={this.handleSubmit}>Submit</button>
                </form>                
                {this.state.searchText !== "" ?
                    this.state.search.map(user => {
                        return(
                            <div key={user.login}>
                                <button className="user" onClick={this.handleClick} value={user.login}>
                                    {user.login}
                                </button>
                            </div>
                        )
                    }) : null
                }
            </div>
        )
    }
}