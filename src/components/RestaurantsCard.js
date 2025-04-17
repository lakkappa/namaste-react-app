import { MENU_ITEM_IMG } from "../utils/Constants";
const RestaurantsCard = (props) => {
    const {
        cloudinaryImageId,
        name,
        costForTwo,
        avgRating,
        sla,
        cuisines
    } = props?.restoItem?.info;

    return (
        <div className="m-4 p-5 w-[300px] bg-gray-100 rounded-lg hover:bg-gray-300">
            <img src={MENU_ITEM_IMG + cloudinaryImageId} className="w-120 h-40 rounded-lg" />
            <div className="card-content">
                <p className="font-bold py-4">{name}</p>
                <p>{costForTwo}</p>
                <p>{'Rating '} {avgRating}</p>
                <p>{sla.deliveryTime} {'mins'}</p>
                <p>{cuisines.join(', ')}</p>
            </div>
        </div>
    );
};
export const promtedRestaurants = (RestaurantsCard) => {
    return (props) => {
        return (
            <div>
                <label className="bg-black text-white absolute p-2 rounded">Promoted</label>
                <RestaurantsCard {...props} />
            </div>
        );
    };
};

export default RestaurantsCard;

