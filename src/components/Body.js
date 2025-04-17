import { useEffect, useState } from "react";
import FoodMenu from "./FoodMenu";
import RestaurantsCard from "./RestaurantsCard";
import { FOOD_API } from "../utils/Constants";
import Shimmer from "./Shimmer";
import ShimmerImage from "./ShimmerImage";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
    const [foodAPIData, setFoodAPIData] = useState([]);
    const [restaurantsItems, setRestaurantsItems] = useState([]);
    const [intialRestaurantsItems, setIntialRestaurantsItems] = useState([]);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        getFoodAPI();
    }, []);

    const getFoodAPI = async () => {
        const api = await fetch(FOOD_API);
        const json = await api.json();
        const foodInfo = json?.data?.cards[0]?.card?.card?.imageGridCards?.info;
        setFoodAPIData(foodInfo);
        const restaurantsInfo = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        setRestaurantsItems(restaurantsInfo);
        setIntialRestaurantsItems(restaurantsInfo);
    }

    const searchHandler = () => {
        const filteredSearchData = intialRestaurantsItems.filter((f) => {
            return f.info.name.toLowerCase().includes(searchText.toLowerCase());
        });
        setRestaurantsItems(filteredSearchData);
    }

    const filterTopRestaurants = () => {
        const filteredRes = restaurantsItems.filter((f) => {
            return f.info.avgRating >= 4.5;
        })
        setRestaurantsItems(filteredRes)
    }

    const status = useOnlineStatus();
    if (!status) {
        return (
            <h1>Looks like your internet is offline, Please check the internet!</h1>
        )
    }

    if (foodAPIData.length === 0) {
        return (
            <div>
                <ShimmerImage />
                <Shimmer />
            </div>
        )
    }
    return (
        <div>
            <h1 className="text-2xl p-5">What's on your mind?</h1>
            <div className="flex flex-wrap">
                {
                    foodAPIData.map((foodMenuItem) => (
                        <FoodMenu key={foodMenuItem.id} foodMenuData={foodMenuItem} />
                    ))
                }
            </div>
            <h1 className="text-2xl py-5 px-5">Restaurants with online food delivery in Bangalore</h1>
            <div className="flex p-5">
                <input type="text" className=" border border-solid border-black" value={searchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }} />
                <button className="bg-blue-400 text-white font-bold py-2 px-4 cursor-pointer" onClick={searchHandler}>Search</button>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mx-10 cursor-pointer rounded" onClick={filterTopRestaurants}>Top Restaurants</button>
            </div>
            <div className="flex flex-wrap">
                {
                    restaurantsItems.map((item) => {
                        return (
                            <Link to={'restaurants/' + item.info.id} key={item.info.id}><RestaurantsCard restoItem={item} /></Link>
                        )
                    })
                }
            </div>
        </div>

    )
}
export default Body;