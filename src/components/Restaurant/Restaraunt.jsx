import { Menu } from "./Menu/Menu"
import { ReviewForm } from "./review-form/Review-form";
import { Reviews } from "./Reviews/Reviews";
export const Restaurant = ({restaurant}) => {

    if (!restaurant.name) {
        return null;
    }

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
                {restaurant.reviews ? <Reviews reviews={restaurant.reviews} /> : null }
                <ReviewForm />
            <hr /> 
                    </div>
            </div>
            </div>
        </>
    )
}