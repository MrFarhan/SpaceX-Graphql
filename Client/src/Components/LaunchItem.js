import React from 'react'
import moment from "moment"
import { Link } from "react-router-dom"

export const LaunchItem = ({ launch: { flight_number, mission_name, launch_year, launch_date_local, launch_success } }) => {
    // console.log("props are ", props)
    return (
        <div className="card  card-body mb-3">
            <div className="row">
                <div className="col-md-9">
                    <h4>Mission: {launch_success ? <span style={{ color: "red" }}>{mission_name}</span> : <span style={{ color: "green" }}>{mission_name}</span>}</h4>
                    <p>Date: {moment(launch_date_local).format("LLL")}</p>
                </div>
                <div className="col-md-3">
                    <Link to={`/launch/${flight_number}`} className="btn btn-primary"> Launch Details</Link>
                </div>
            </div>
        </div>
    )
}
