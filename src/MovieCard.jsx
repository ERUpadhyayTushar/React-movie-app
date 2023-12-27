import React from "react";

const MovieCard = ({ movie }) => {
    // Check if movie is defined and has the expected structure
    if (!movie || !movie.imdbID || !movie.Year || !movie.Poster || !movie.Title || !movie.Type) {
      // Handle the case where the movie object is not as expected
      return null; // or some other fallback UI or return statement
    }
  
    const { imdbID, Year, Poster, Title, Type } = movie;
    return(
        <div className='movie' key={imdbID}>
            <div>
                <p>{Year}</p>
              </div>

              <div>
                <img src = {Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title}/>
              </div>

              <div>
                <span>{Type}</span>
                <h3>{Title}</h3>
              </div>
        </div>      
    );
}

export default MovieCard;