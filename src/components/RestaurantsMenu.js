import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import useUserContext from "../utils/useUserContext";
const RestaurantsMenu = () => {
    const [recommendedItem, setRecommendedItem] = useState([]);
    // const [initialRecommendedItem, setInitialRecommendedItem] = useState([]);
    const [showIndex, setShowIndex] = useState(0);
    const { resId } = useParams();
    const menuData = useRestaurantsMenu(resId);
    const { loggedInUser } = useContext(useUserContext);

    useEffect(() => {
        if (menuData.length > 0) {
            const filterdItem = menuData[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((f) => {
                return f?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory";
            });
            setRecommendedItem(filterdItem);
            // setInitialRecommendedItem(filterdItem);
        }
    }, [menuData]);

    if (menuData.length === 0) {
        return <Shimmer />
    }

    // const vegHandler = () => {
    //     const veg = initialRecommendedItem.map((i) => {
    //         const filtredData = i.card.card.itemCards.filter((f) => {
    //             return f.card.info.itemAttribute.vegClassifier === 'VEG';
    //         })
    //         return filtredData;
    //     });
    //     console.log(veg[0], 'results11');
    //     console.log(recommendedItem[0], 'results11');
    // }

    const { name, avgRatingString, totalRatingsString, costForTwoMessage, cuisines, areaName, sla, cloudinaryImageId } = menuData[2]?.card?.card?.info;

    return (
        <div className="mx-100 my-10">
            <h1 className="font-bold text-center text-4xl mr-50">{name}</h1>
            <span className="ml-200 pb-5 font-bold text-center text-2xl">User: {loggedInUser}</span>
            <div className="p-4 border border-solid border-gray rounded-2xl">
                <h3>{avgRatingString} ({totalRatingsString}) {costForTwoMessage}</h3>
                <h3 className="text-red-500">{cuisines.join(', ')}</h3>
                <h3>{areaName}</h3>
                <h3>{sla.slaString}</h3>
            </div>
            {
                recommendedItem.map((category, index) => {
                    return (
                        <RestaurantsCategory
                            key={category.card.card.categoryId}
                            data={category?.card?.card}
                            showItem={index === showIndex ? true : false}
                            showIndex={() => setShowIndex(index)}
                            restaurantName={name}
                            areaName={areaName}
                            cloudinaryImageId={cloudinaryImageId}
                        />
                    )
                })
            }

            {/* <div className="food-cat-btns">
                <button className="bg-green-500 text-white font-bold py-2 px-4 cursor-pointer rounded" onClick={vegHandler}>Veg</button>
                <button className="bg-red-500 text-white font-bold py-2 px-4 m-10 cursor-pointer rounded" onClick={nonVegHandler}>Non-Veg</button>
            </div> */}

        </div>
    )
}
export default RestaurantsMenu;