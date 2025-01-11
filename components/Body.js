import { useState, useEffect } from "react";
import Card from "./Card";
const Body = () => {
    const [listOfResto, setListOfResto] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [initialListOfResto, setInitialListOfResto] = useState([]);


    useEffect(() => {
        getData();
    }, [])

    getData = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9352&lng=77.6245&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        const apiData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfResto(apiData);
        setInitialListOfResto(apiData);
    }

    return listOfResto.length === 0 ? (
        <h1>Loading!!!!</h1>
    ) : (
        <div className="body">
            <div className="top-rated-res">
                <button className={toggle ? "top-button-active" : "top-button-inactive"} onClick={() => {
                    setToggle((toggle) => {
                        toggle = !toggle
                        if (toggle) {
                            const filterdData = listOfResto.filter((f) => {
                                return f.info.avgRating > 4.3;
                            });
                            setListOfResto(filterdData);
                        }
                        else {
                            setListOfResto(initialListOfResto);
                        }
                        return toggle
                    });

                }}>Top Rated Restaurants</button>
            </div>
            <div className="body-container">
                {listOfResto.length && listOfResto.map((item, index) => (
                    <Card resData={item} key={index} />
                ))}
            </div>
        </div>

    )
}
export default Body;