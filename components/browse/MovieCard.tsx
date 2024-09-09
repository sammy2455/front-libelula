import Link from "next/link";
import React from "react";
import {Movie} from "@/interfaces/Movies";

interface MovieCardProps {
    movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
    return (
        <div className="col-span-2 p-2 rounded-md hover:bg-zinc-900">
            <Link href={`/browse/${movie.imdbID}`}>
                <div>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                </div>
                <div>
                    <span className="text-lg font-bold text-primary">{movie.Title}</span>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus nihil reiciendis dicta iste aut asperiores esse illum dolorem voluptate.</p>
                </div>
            </Link>
        </div>
    );
}

export default MovieCard;