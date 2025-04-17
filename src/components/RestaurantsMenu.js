import { useEffect, useState } from "react";
import { RESTAURANTS_MENU_API, RESTAURANTS_MENU_IMG } from "../utils/Constants";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
const RestaurantsMenu = () => {
    const [recommendedItem, setRecommendedItem] = useState([]);
    const [initialRecommendedItem, setInitialRecommendedItem] = useState([]);

    const { resId } = useParams();
    const menuData = useRestaurantsMenu(resId);

    useEffect(() => {
        if (menuData.length > 0) {
            const recomendedItem = menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || [];
            setRecommendedItem(recomendedItem);
            setInitialRecommendedItem(recomendedItem);
        }
    }, [menuData]);

    if (menuData.length === 0) {
        return <Shimmer />
    }

    const vegHandler = () => {
        let vegItem = initialRecommendedItem.filter((f) => {
            return f.card.info.itemAttribute.vegClassifier === 'VEG';
        })
        setRecommendedItem(vegItem);
    }

    const nonVegHandler = () => {
        const vegItem = initialRecommendedItem.filter((f) => {
            return f.card.info.itemAttribute.vegClassifier === 'NONVEG';
        })
        setRecommendedItem(vegItem);
    }

    const { name, avgRatingString, totalRatingsString, costForTwoMessage, cuisines, areaName, sla } = menuData[2]?.card?.card?.info;

    return (
        <div className="mx-100 my-10">
            <h1 className="font-bold text-4xl">{name}</h1>
            <div className="p-4 my-4 border border-solid border-gray rounded-2xl">
                <h3>{avgRatingString} ({totalRatingsString}) {costForTwoMessage}</h3>
                <h3 className="text-red-500">{cuisines.join(', ')}</h3>
                <h3>{areaName}</h3>
                <h3>{sla.slaString}</h3>
            </div>
            <div className="food-cat-btns">
                <button className="bg-green-500 text-white font-bold py-2 px-4 cursor-pointer rounded" onClick={vegHandler}>Veg</button>
                <button className="bg-red-500 text-white font-bold py-2 px-4 m-10 cursor-pointer rounded" onClick={nonVegHandler}>Non-Veg</button>
            </div>
            {/* <div className="restaurants-menu-items"> */}
            <h2 className="font-bold text-2xl my-5">Recommended</h2>
            {

                recommendedItem.map((recomendedItem) => {
                    const { name, price, description, id, defaultPrice } = recomendedItem.card.info;
                    return (
                        <div className="flex justify-between" key={id}>
                            <div className="rest-recomended-item">
                                <h4 className="font-bold">{name}</h4>
                                <h5>₹{price / 100 || defaultPrice / 100}</h5>
                                <p>{description}</p>
                            </div>
                            <img className="mb-10 w-50 h-40" src={RESTAURANTS_MENU_IMG + recomendedItem.card.info.imageId} />
                        </div>
                    )
                })
            }
            {/* </div> */}
        </div>
    )
}
export default RestaurantsMenu;