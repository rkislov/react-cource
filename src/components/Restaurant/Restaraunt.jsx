import { Menu } from "./Menu/Menu"
import { Review } from "./Review/Review"
export const Restaurant = ({restaurant}) => {
    return(
        <>
        <div className="card" style={{width: '20rem' }}>
            <div className="card-body">
                <h5 className="card-title">{restaurant.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted"></h6>
                <div className="card-text">
            <ul className="menu">
            {
                restaurant.menu.map((item) => (
                    <Menu item={item} key={item.id} />
            
                )
            )}
            </ul>
            <h3>Отзывыв:</h3>
            <ul className="reviews">
                {
                restaurant.reviews.map((review) => (
                < Review review={review} key={review.id} />
                ))
                }
            </ul>
            <hr /> 
                    </div>
            </div>
            </div>
        </>
    )
}