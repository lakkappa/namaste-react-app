import { useState, useEffect } from "react";
import { API_URL } from "./constant";
import Card from "./Card";
import Shimmer from "./Shimmer";
const Body = () => {
    const [listOfResto, setListOfResto] = useState([]);
    const [toggle, setToggle] = useState(false);
    const [initialListOfResto, setInitialListOfResto] = useState([]);
    const [searchValue, setSearchValue] = useState("");

    useEffect(() => {
        getData();
    }, [])

    getData = async () => {
        const data = await fetch(API_URL);
        const json = await data.json();
        const apiData = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
        setListOfResto(apiData);
        setInitialListOfResto(apiData);
    }

    return listOfResto.length === 0 ? (
        <Shimmer />
    ) : (
        <div className="body">
            <div className="serach-top-rated">
                <div className="search">
                    <input type="text" value={searchValue} onChange={(e) => {
                        setSearchValue(e.target.value);
                    }} />
                    <button onClick={() => {
                        const filterdSearchData = initialListOfResto.filter((f) => {
                            return f.info.name.toLowerCase().includes(searchValue.toLowerCase());
                        });
                        setListOfResto(filterdSearchData);
                    }}>search</button>
                </div>
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