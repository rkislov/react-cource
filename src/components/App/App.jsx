import { Layout } from "../Layout/Layout"
import { Restaurant } from "../Restaurant/Restaraunt"
import { NameBlock } from "./NameBlock/NameBlock"
import { useState } from "react"

export const App = ({ restaurants }) => {

const [selectedRestaurantId, setSelectedRestaurantId] = useState(restaurants.length > 0 ? restaurants[0].id : null)
const handleNameBlockClick = (id) => {
    setSelectedRestaurantId(id);
};


return (
        <Layout>
        <div className="main">
           
        <div className="row">
                <div className="d-flex justify-content-center mt-5">
                {restaurants.map(({id, name}) => (
                    <NameBlock id={id} name={name} key={id} onClick={() => handleNameBlockClick(id)}/>
                ))}
            </div>
        </div>
        <div className="row">
            <div className="d-flex justify-content-center mt-5">
            {selectedRestaurantId ? (
              <Restaurant
                restaurant={restaurants.find(r => r.id === selectedRestaurantId)}
                key={selectedRestaurantId}
              />
            ) : (
              <p>Нет доступных ресторанов</p> // Если массив пуст
            )}
            </div>
        </div>
    </div>
    </Layout>
)
}