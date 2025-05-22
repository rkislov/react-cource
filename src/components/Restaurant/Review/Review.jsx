export const Review=({review}) => {
    return(
         <li  className="review-list">
                    <div><strong>{review.user}</strong>: {review.text}</div>
                    <div>рейтинг: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
        </li>
    )
}