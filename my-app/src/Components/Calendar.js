import React from "react"

export const Calendar = props => {
    var chart = `http://ghchart.rshah.org/${props.data.login}`;
    return(
        <div className="calendar">
            <img src={chart} alt={props.login}/>
        </div>
    )
}