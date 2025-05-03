import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from 'react-router-dom';
import useRestaurantsMenu from "../utils/useRestaurantsMenu";
import RestaurantsCategory from "./RestaurantsCategory";
import useUserContext from "../utils/useUserContext";
const RestaurantsMenu = () => {
    const [recommendedItem, setRecommendedItem] = useState([]);
    const [initialRecommendedItem, setInitialRecommendedItem] = useState([]);
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
            setInitialRecommendedItem(filterdItem);
        }
    }, [menuData]);

    if (menuData.length === 0) {
        return <Shimmer />
    }

    const { name, avgRatingString, totalRatingsString, costForTwoMessage, cuisines, areaName, sla, cloudinaryImageId } = menuData[2]?.card?.card?.info;

    const vegHandler = () => {
        const vegItems = initialRecommendedItem.map((category) => {
            const filteredData = category.card.card.itemCards?.filter((item) =>
                item.card.info.itemAttribute.vegClassifier === "VEG"
            );
            return {
                ...category,
                card: {
                    ...category.card,
                    card: {
                        ...category.card.card,
                        itemCards: filteredData,
                    },
                },
            };
        }).filter(category => category.card.card.itemCards.length > 0);
        setRecommendedItem(vegItems);
    }

    const nonVegHandler = () => {
        const nonVegItems = initialRecommendedItem.map((category) => {
            const filteredData = category.card.card.itemCards?.filter((item) =>
                item.card.info.itemAttribute.vegClassifier === "NONVEG"
            );
            return {
                ...category,
                card: {
                    ...category.card,
                    card: {
                        ...category.card.card,
                        itemCards: filteredData,
                    },
                },
            };
        }).filter(category => category.card.card.itemCards.length > 0);
        setRecommendedItem(nonVegItems);
    }

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

            <div className="flex my-10 pr-10">
                <button className="py-3 px-5 m-4 bg-green-500 cursor-pointer" onClick={vegHandler}>Veg</button>
                <button className="py-3 px-5 m-4 bg-red-500 cursor-pointer" onClick={nonVegHandler}>Non Veg</button>
            </div>

            {
                recommendedItem.map((category, index) => {

                    return (
                        <RestaurantsCategory
                            key={category?.card?.card?.categoryId}
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
        </div>
    )
}
export default RestaurantsMenu;