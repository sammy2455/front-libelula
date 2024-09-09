import React, { createContext, useState, ReactNode } from "react";
import axios from "axios";
import {Movie} from "@/interfaces/Movies";

export interface MovieContextType {
    movies: Movie[];
    setMovies: React.Dispatch<React.SetStateAction<Movie[]>>;
    movie: Partial<Movie>;
    setMovie: React.Dispatch<React.SetStateAction<Partial<Movie>>>;
    searchQuery: string;
    setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
    loading: boolean;
    setLoading: React.Dispatch<React.SetStateAction<boolean>>;
    fetchMovies: (search?: string) => Promise<void>;
    fetchOneMovie: (imdbID: string) => Promise<void>;
    handleSearch: (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => void;
}

const MovieContext = createContext<MovieContextType | undefined>(undefined);

interface MovieProviderProps {
    children: ReactNode;
}

const MovieProvider: React.FC<MovieProviderProps> = ({ children }) => {
    const [searchQuery, setSearchQuery] = useState<string>("");
    const [movies, setMovies] = useState<Movie[]>([]);
    const [movie, setMovie] = useState<Partial<Movie>>({});
    const [loading, setLoading] = useState<boolean>(false);

    const fetchMovies = async (search: string = "action") => {
        setLoading(true);
        setMovies([]);
        try {
            const response = await axios.get<{ Search: Movie[] }>(`https://www.omdbapi.com/?apikey=6344c1aa&page=1&type=movie&s=${search}`);
            setMovies(response.data.Search);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.error("Error fetching movies:", e);
        }
    };

    const fetchOneMovie = async (imdbID: string) => {
        setLoading(true);
        setMovie({});
        try {
            const response = await axios.get<Movie>(`https://www.omdbapi.com/?apikey=6344c1aa&i=${imdbID}`);
            setMovie(response.data);
            setLoading(false);
        } catch (e) {
            setLoading(false);
            console.error("Error fetching movie:", e);
        }
    };

    const handleSearch = (event: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault();
        fetchMovies(searchQuery);
    };

    const contextValue: MovieContextType = {
        movies, setMovies,
        movie, setMovie,
        searchQuery, setSearchQuery,
        loading, setLoading,
        fetchMovies,
        fetchOneMovie,
        handleSearch,
    };

    return (
        <MovieContext.Provider value={contextValue}>
            {children}
        </MovieContext.Provider>
    );
};

export { MovieProvider };
export default MovieContext;