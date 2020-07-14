import React from 'react'

export class FriendList extends React.Component{  
    
    handleClick = (e) => {
        console.log(e.target.value)
        this.props.changeUser(e.target.value);
    }

    render(){
        return(
            <div className="followersList">
                <h2>Followers</h2>
                {this.props.followers.map(item => {
                    console.log(item.login)
                    return(
                    <div key={item.login} className="followers">
                        <img src={item.avatar_url} alt={item.name} className="followerImg"/>
                        <p className="followerLogin">{item.login}</p>
                        <button className="viewProfile" onClick={this.handleClick} value={item.login}>View Profile</button>
                    </div>
                )})}        
            </div>
    )}
}