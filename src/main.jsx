import { createRoot } from "react-dom/client";
import { restaurants } from '../mock.js'

const root = document.getElementById("root");

const reactRoot = createRoot(root);

reactRoot.render(
  <div className="main">
      {restaurants.map((restaraunt) => (
        <div className="restaraunt" key={restaraunt.id}>
          <h1>{restaraunt.name}</h1>
          <h3>Меню</h3>
          <ul className="menu">
            {
              restaraunt.menu.map((item) => (
                <li key={item.id} className="item-list">
                  <strong>{item.name}</strong> - {item.price} руб.
                  <div>Ингредиенты: {item.ingredients.join(', ')}</div>
                </li>
              )
            )}
          </ul>
          <h3>Отзывыв:</h3>
          <ul className="reviews">
              {
                restaraunt.reviews.map((review) => (
                  <li key={review.id} className="review-list">
                    <div><strong>{review.user}</strong>: {review.text}</div>
                    <div>рейтинг: {'★'.repeat(review.rating)}{'☆'.repeat(5 - review.rating)}</div>
                  </li>
                ))
              }
          </ul>
          <hr />          
        </div>
      ))}
  </div>

)