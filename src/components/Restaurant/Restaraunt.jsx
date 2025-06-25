import { Menu } from "./Menu/Menu";
import { ReviewForm } from "./review-form/Review-form";
import { Reviews } from "./Reviews/Reviews";
import styles from "./restaurant.module.css";

export const Restaurant = ({ restaurant }) => {
  if (!restaurant.name) {
    return null;
  }

  // Размножаем данные для создания длинного скролла
  const multipliedMenu = [
    ...restaurant.menu,
    ...restaurant.menu,
    ...restaurant.menu,
  ];
  const multipliedReviews = restaurant.reviews
    ? [...restaurant.reviews, ...restaurant.reviews, ...restaurant.reviews]
    : null;

  return (
    <>
      <div className={styles.restaurantContainer}>
        <div className={styles.restaurantCard}>
          <h2 className={styles.restaurantName}>{restaurant.name}</h2>

          <section className={styles.menuSection}>
            <h3 className={styles.sectionTitle}>Меню</h3>
            <ul className={styles.menuList}>
              {multipliedMenu.map((item, index) => (
                <Menu item={item} key={`${item.id}-${index}`} />
              ))}
            </ul>
          </section>

          {multipliedReviews && (
            <section className={styles.reviewsSection}>
              <h3 className={styles.sectionTitle}>Отзывы</h3>
              <Reviews reviews={multipliedReviews} />
            </section>
          )}

          <ReviewForm />
        </div>
      </div>
    </>
  );
};
