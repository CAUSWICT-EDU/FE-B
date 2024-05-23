import React from 'react';
import useStore from "./store";
import { Link } from "react-router-dom";

function ReviewHome() {
    const reviews = useStore( (state) => state.reviews);
    
    return (
        <div>    
            <h1>Reviews</h1>
            <Link to='/newReview'>Add Review</Link>
            <ul>
                {Array.isArray(reviews) && reviews.length > 0 ? (
                    reviews.map( (reviews) => (
                        <li key={reviews.id}>
                            <Link to={`/review/${reviews.id}`}>{reviews.title}</Link>
                        </li>
                    ))
                ) : (
                <li>No reviews yet</li>
                )}
            </ul>
            <nav>
                <ul className='handleReview'>
                    <li><Link to='/newreview'>Write New Review</Link></li>
                    <li><Link to='/reviewdetail'>Review Detail</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default ReviewHome;