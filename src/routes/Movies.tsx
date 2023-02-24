import { gql, useApolloClient } from '@apollo/client';
import React, { useEffect, useState } from 'react'

function Movies() {
    const [movies, setMovies]=useState([]);
    const client = useApolloClient();

    useEffect(()=>{
        client.query({
            query : gql`
            {
                allMovies{
                    title
                    id
                }
            }
            `
        }).then(res=>setMovies(res.data.allMovies));
    },[]);
        
    return (
        <div>
            {movies.map((movie: any) => <li key={movie.id}>{movie.title}</li>)}
        </div>
    )
}

export default Movies