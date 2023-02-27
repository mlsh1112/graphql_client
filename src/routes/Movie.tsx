import { gql, useQuery } from '@apollo/client';
import { useParams } from 'react-router-dom'

const GET_MOVIE = gql`
    query getMovie($movieId: ID!){
        movie(id: $movieId) {
            id
            title
        }
    }
`

function Movie() {
    const {id} = useParams();
    const {data, loading} = useQuery(GET_MOVIE, {
      variables : {
        movieId: id
      }
    })
    console.log(data, loading)
    if(loading) return <h1>Fetching Movie ... </h1>
    return (
      <div>{data?.movie?.title}</div>
    )
}

export default Movie