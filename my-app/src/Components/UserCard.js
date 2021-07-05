import React from "react";
import {Calendar} from "./Calendar"

export const UserCard = props => {

  var link = `https://github.com/${props.data.login}?tab=repositories`

  return(
    <div>
      <div className="profile">
        <h2>{props.data.name}</h2>
        <h4>{props.data.location}</h4>
        <img src={props.data.avatar_url} alt={props.data.name}/>
        <p>{props.data.bio}</p>
        <p><span>Followers: {props.data.followers}</span> <span>Following: {props.data.following}</span></p>
        <p>Number of public repositories: {props.data.public_repos}</p>
        <a href={link}>Link to repositories</a>
      </div>
      <Calendar data={props.data}/>
    </div>
  )
}