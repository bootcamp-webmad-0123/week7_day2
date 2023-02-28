const MovieCard = ({ IMDBRating, title, director, removeMovie, _id, hasOscars }) => {

    const generateScoreLabel = score => {
        if (score > 9) {
            return <span className="green">9+</span>;
        } else if (score < 7) {
            return <span className="red">{score}</span>;
        } else {
            return <span className="black">{score}</span>;
        }
    }

    return (
        <div className="MovieCard">
            <h3>{title}</h3>
            <p>Director: {director}</p>
            <p>Rating: {generateScoreLabel(IMDBRating)} | {hasOscars ? 'Sí ganó Oscar 🏆' : 'No ganó Oscar 💩'}</p>

            <button className="btn-delete" onClick={() => removeMovie(_id)}>Delete</button>
        </div>
    )
}

export default MovieCard