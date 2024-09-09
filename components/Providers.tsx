'use client';

import React from 'react';
import { MovieProvider } from "@/modules/movies/context/MovieProvider";

interface ProvidersProps {
    children: React.ReactNode;
}

export default function Providers({ children }: ProvidersProps) {
    return (
        <MovieProvider>
            {children}
        </MovieProvider>
    );
}