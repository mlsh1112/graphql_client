import { gql, useQuery } from '@apollo/client';
import { Link } from 'react-router-dom';

const GET_ALL_MOVIES = gql`
{
    allMovies{
        title
        id
    }
}`;

function Movies() {
    const {data, loading, error} = useQuery(GET_ALL_MOVIES);

    if(loading) return <div>Loading...</div>
    if(error) return <div>Could not fetch...</div>
    return (
        <ul>
            {data.allMovies.map((movie: any)=>(
                <li key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                </li>
            ))}
        </ul>
    )
}

export default Movies