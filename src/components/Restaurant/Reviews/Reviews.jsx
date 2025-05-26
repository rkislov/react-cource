import { Review } from "../Review/Review"

export const Reviews=({reviews}) => {
    return(
        <>
        <h3>Отзывыв:</h3>
            <ul className="reviews">
                
            { reviews.map((review) => (
                <Review review={review} key={review.id} />
                ))
            }
            </ul>
        </>
    )
}