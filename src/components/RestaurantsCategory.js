import { useState } from "react";
import ItemList from "./ItemList";
const RestaurantsCategory = ({ data, showItem, showIndex, restaurantName, areaName, cloudinaryImageId }) => {
    const { title } = data;

    const showToggle = () => {
        showIndex();
    }

    return (
        <div className="cursor-pointer bg-gray-50 mb-5 shadow-lg p-4" onClick={showToggle}>
            <div className="flex justify-between font-bold my-6 mb-5 text-3xl">
                <p>{title}({data.itemCards.length})</p>
                <p>↕️</p>
            </div>
            {showItem && <ItemList data={data.itemCards} restaurantName={restaurantName} areaName={areaName} cloudinaryImageId={cloudinaryImageId} />}
        </div>
    );
}
export default RestaurantsCategory;