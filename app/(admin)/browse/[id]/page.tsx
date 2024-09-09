'use client';

import Califications from "@/components/browse/Califications";
import WriteComment from "@/components/browse/WriteComment";
import useMovie from "@/modules/movies/hooks/useMovie";
import {useEffect} from "react";
import {useParams} from "next/navigation";
import RatingStars from "@/components/browse/RatingStars";

const MovieDetail = () => {

    const params = useParams<{ id: string; }>()

    const {movie, fetchOneMovie} = useMovie();

    useEffect(() => {
        fetchOneMovie(params.id);
    }, []);

    return (
        <div className="max-w-384 mx-auto grid-layout">
            <div className="col-span-full lg:col-start-3">
                <h1 className="header-1">{movie.Title}</h1>
            </div>
            <div className="col-span-full md:col-start-1 md:col-span-4 lg:col-start-3">
                <img src={movie.Poster} alt={movie.Title}/>
            </div>
            <div className="col-span-full md:col-span-4 flex flex-col justify-center">
                <ul>
                    <li>Director: <span className="text-primary">{movie.Director}</span></li>
                    <li>Cast: <span className="text-primary">{movie.Actors}</span></li>
                    <li>Género: <span className="text-primary">{movie.Genre}</span></li>
                    <li>Estreno: <span className="text-primary">{movie.Released}</span></li>
                    <li>Duración: <span className="text-primary">{movie.Runtime}</span></li>
                    <RatingStars rating={movie.imdbRating} />
                </ul>
                <div className="mt-4">
                    <h2 className="header-2">Resumen</h2>
                    <p>{movie.Plot}</p>
                </div>
            </div>
            <hr className="col-span-full lg:col-start-3 lg:col-end-11 border-2"/>
            <div className="col-span-full lg:col-start-3 lg:col-end-11">
                <h2 className="header-2 my-4">Reseñas</h2>
                <Califications/>
            </div>
            <div className="col-span-full lg:col-start-3 lg:col-end-11 mb-20">
                <h2 className="header-2 my-4">Deja tu calificación</h2>
                <WriteComment/>
            </div>
        </div>
    );
}
 
export default MovieDetail;