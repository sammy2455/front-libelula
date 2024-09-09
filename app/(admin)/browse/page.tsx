import MovieCard from "@/components/browse/MovieCard";

const BrowsePage = () => {
    return (
        <div className="max-w-384 mx-auto grid-layout">
            <div className="col-start-1 col-span-full">
                <h1 className="header-1"> <span className="text-primary">Catálogo</span> películas</h1>
            </div>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
                <MovieCard/>
        </div>
    );
}
 
export default BrowsePage;