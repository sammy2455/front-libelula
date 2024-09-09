'use client';

import MovieCard from "@/components/browse/MovieCard";
import {useEffect} from "react";
import useMovie from "@/modules/movies/hooks/useMovie";
import {Movie} from "@/interfaces/Movies";

const BrowsePage = () => {

    const {movies, fetchMovies} = useMovie();

    useEffect(() => {
        fetchMovies();
    }, []);

    return (
        <div className="max-w-384 mx-auto grid-layout">
            <div className="col-start-1 col-span-full">
                <h1 className="header-1"> <span className="text-primary">Catálogo</span> películas</h1>
            </div>
            {movies?.map((movie: Movie) => (
                <MovieCard movie={movie} key={movie.imdbID} />
            ))}
        </div>
    );
}
 
export default BrowsePage;