import React from 'react'
import { useQuery, gql } from '@apollo/client';
import { LaunchItem } from './LaunchItem';

const LAUNCH_QUERY = gql`
  query LaunchesQuery{
        launches{
          flight_number
          launch_date_local
          mission_name
          launch_year
          launch_success

        }
}
`;


export const Launches = () => {
    const { loading, error, data } = useQuery(LAUNCH_QUERY);
    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error :(</p>;
    console.log("data is ", data)
    console.log("error is ", error)
    return (
        <>
            {data?.launches?.map((launch,index) => {
                 return <LaunchItem key= {index} launch={launch} />
            }
            )}
        </>
    )
}
