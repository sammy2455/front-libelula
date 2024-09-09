import React from 'react';
import { Star } from 'lucide-react';

interface RatingStarsProps {
    rating: number | string | undefined;
}

const RatingStars: React.FC<RatingStarsProps> = ({ rating }) => {
    const numericRating = typeof rating === 'string' ? parseFloat(rating) : rating;
    const validRating = Math.max(0, Math.min(10, numericRating || 0));
    const fullStars = Math.round(validRating / 2);

    return (
        <li className="flex items-center">
            <span className="mr-1">Rating: </span>
            <span className="text-primary flex">
        {Array.from({ length: Math.min(fullStars, 5) }, (_, index) => (
            <Star key={`full-${index}`} className="fill-current" />
        ))}
      </span>
            {Array.from({ length: Math.max(0, 5 - fullStars) }, (_, index) => (
                <Star key={`empty-${index}`} className="text-gray-300" />
            ))}
            <span className="ml-1">{validRating.toFixed(1)}/10</span>
        </li>
    );
};

export default RatingStars;