import Califications from "@/components/browse/Califications";
import WriteComment from "@/components/browse/WriteComment";
import MovieImage from "@/img/movie.jpg";
import { Star } from "lucide-react";
import Image from "next/image";

const MovieDetail = () => {
    return (
        <div className="max-w-384 mx-auto grid-layout">
            <div className="col-span-full lg:col-start-3">
                <h1 className="header-1">Nombre de la Película</h1>
            </div>
            <div className="col-span-full md:col-start-1 md:col-span-4 lg:col-start-3">
                <Image src={MovieImage} objectFit="cover" alt="Movie"/>
            </div>
            <div className="col-span-full md:col-span-4 flex flex-col justify-center">
                <ul>
                    <li>Director: <span className="text-primary">Vince Gilligan</span></li>
                    <li>Cast: <span className="text-primary">Brian Cranston, Jesse Plemons, Matt Jones, Jonathan Banks</span></li>
                    <li>Género: <span className="text-primary">Acción, thriller</span></li>
                    <li>Estreno: <span className="text-primary">29/09/2012</span></li>
                    <li>Duración: <span className="text-primary">120 min</span></li>
                    <li className="flex"><span className="mr-1">Rating: </span><span className="text-primary flex"><Star/><Star/><Star/><Star/></span><Star/></li>
                </ul>
                <div className="mt-4">
                    <h2 className="header-2">Resumen</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos non nemo beatae, voluptatum amet vel aspernatur harum eveniet. Perspiciatis, obcaecati facilis vero molestias veniam quidem quam a dolorem dolore recusandae.</p>
                </div>
            </div>
            <hr className="col-span-full lg:col-start-3 lg:col-end-11 border-2"/>
            <div className="col-span-full lg:col-start-3 lg:col-end-11">
                <h2 className="header-2 my-4">Reseñas</h2>
                <Califications/>
            </div>
            <div className="col-span-full lg:col-start-3 lg:col-end-11">
                <h2 className="header-2 my-4">Deja tu calificación</h2>
                <WriteComment/>
            </div>
        </div>
    );
}
 
export default MovieDetail;