const MovieCard = ({ movie }) => {
    const onFavoriteClick = () => {
        alert("Favorite button clicked for movie:", movie.title);
    };
    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={movie.url} alt={movie.title}/>
                <div className="movie-overlay">
                    <button className="favorite-btn" onClick={onFavoriteClick}>heart</button>
                </div>
            </div>
            <div className="movie-info"></div>
                <h3>{movie.title}</h3>
                <p>{movie.release_date}</p>
        </div>
    );
}
export default MovieCard;