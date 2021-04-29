import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { Link } from 'react-router-dom';


const LAUNCH_QUERY = gql`
query LaunchesQuery($flight_number:Int!){
      launch(flight_number:$flight_number){
        flight_number
        launch_date_local
        mission_name
        launch_year
        launch_success,
        rocket {
            rocket_id
            rocket_name
            rocket_type
        }
      }
}
`;

export const Launch = (props) => {
    let { flight_number } = props?.match?.params;
    flight_number = parseInt(flight_number)


    console.log("flight number is ", flight_number)

    const { loading, error, data } = useQuery(LAUNCH_QUERY, { variables: { flight_number } })

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error  </p>
    let { mission_name, launch_year, launch_success, rocket: { rocket_id, rocket_name, rocket_type } } = data.launch;
    console.log("flight id is ", flight_number)
    console.log("data is ", data)
    console.log("error is ", error)
    return (
        <div>
            <h1 className="display-4 my-3">
                <span className="text-dark">Mission: </span>{mission_name}
            </h1>
            <h4 className="mb-3">Launch Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Flight Number:  {flight_number}</li>
                <li className="list-group-item">Launch Year:  {launch_year}</li>
                <li className="list-group-item">Launch Success:  {launch_success ? <span style={{ color: "green" }}> Yes</span> : <span style={{ color: "green" }}>No</span>}</li>

            </ul>

            <h4 className="mb-3">Rocket Details</h4>
            <ul className="list-group">
                <li className="list-group-item">Rocket ID:  {rocket_id}</li>
                <li className="list-group-item">Rocket Name:  {rocket_name}</li>
                <li className="list-group-item">Rocket Type:  {rocket_type}</li>
            </ul>

            <hr />
            <Link to="/" className="btn btn-secondary" >  Back </Link>
        </div>
    )
}
