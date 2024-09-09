import Image from "next/image";
import MovieImage from "@/img/movie.jpg";
import Link from "next/link";

const MovieCard = () => {
    return (
        <div className="col-span-2 p-2 rounded-md hover:bg-zinc-900">
            <Link href="/browse/example">
                <div>
                    <Image src={MovieImage} objectFit="cover" alt="Movie"/>
                </div>
                <div>
                    <span className="text-lg font-bold text-primary">The Edge of Tomorrow</span>
                    <p className="text-xs">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur voluptatibus nihil reiciendis dicta iste aut asperiores esse illum dolorem voluptate.</p>
                </div>
            </Link>
        </div>
    );
}
 
export default MovieCard;