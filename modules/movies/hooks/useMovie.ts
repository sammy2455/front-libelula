import {useContext} from "react";
import MovieContext from "@/modules/movies/context/MovieProvider";

const useMovie = () => {
    return useContext(MovieContext);
}

export default useMovie;