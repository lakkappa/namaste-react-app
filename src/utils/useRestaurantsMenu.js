import { useEffect, useState } from "react";
import { RESTAURANTS_MENU_API } from "./Constants";

const useRestaurantsMenu = (resId) => {
    const [restaurantsMenu, setRestaurantsMenu] = useState([]);

    useEffect(() => {
        getRestaurantsMenuData();
    }, []);

    const getRestaurantsMenuData = async () => {
        const res = await fetch(RESTAURANTS_MENU_API + resId);
        const json = await res.json();
        setRestaurantsMenu(json?.data?.cards);
    }
    return restaurantsMenu;
}
export default useRestaurantsMenu;