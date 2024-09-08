'use client'

import { useEffect, useState } from "react";
import { SearchBar } from "./SearchBar";
import { Home, User } from "lucide-react";
import Link from "next/link";

const Header = () => {
    const [scrollY, setScrollY] = useState(0); //Get scroll position

    useEffect(() => {
        const handleScroll = () => {
            setScrollY(window.scrollY);
        };

        handleScroll(); //Set the initial scroll value
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <div className="fixed top-0 left-0 md:m-4 lg:mt-4 lg:mx-0 z-30 right-0 flex justify-center">
            <div className={`w-full max-w-384 grid-layout ${scrollY > 30 ? '!px-0' : '!px-0'}`}>
                <nav 
                    className={`border-b md:border border-b-white/15 md:border-white/15 md:shadow-sm ${scrollY > 30 ? 'shadow-sm' : ''}
                     px-5 lg:px-4 relative py-2 bg-white/5 backdrop-blur-lg rounded-b-lg md:rounded-lg col-span-full lg:col-start-2 lg:col-end-12
                    `}
                >
                    <div className="flex justify-between items-center">
                        <Link href={"/browse"} className="hidden md:block w-16 text-nowrap">
                            <span className="font-bold text-primary">Libélula </span>
                            <span className="font-bold">Movies</span>
                        </Link>
                        <div className="w-full md:w-auto flex justify-between items-center space-x-4">
                            <SearchBar/>
                            <div className="hidden md:block border-l border-l-gray-300 dark:border-l-gray-500 h-5"/>
                            <Link href="/profile" className="flex space-x-1">
                                <User className="w-5"/>
                            </Link>
                            <Link href="/browse" className="flex space-x-1">
                                <Home className="w-5"/>
                            </Link>
                        </div>
                    </div>
                </nav>
            </div>
        </div>
    );
}
 
export default Header;