import { RESTAURANTS_MENU_IMG } from "../utils/Constants";

const ItemList = (props) => {
    return (
        <div>
            {
                props.data.map((subItemMenu) => {
                    const { name, price, description, id, defaultPrice, imageId } = subItemMenu.card.info;
                    return (
                        <div key={id} className="flex border-b-2 border-gray-200 mb-5">
                            <div className="w-9/12">
                                <h4 className="font-bold text-2xl">{name}</h4>
                                <h5>₹{price / 100 || defaultPrice / 100}</h5>
                                <p>{description}</p>
                            </div>
                            <div className="w-3/12">
                                <img className="w-60 h-40" src={RESTAURANTS_MENU_IMG + imageId} />
                                <button className="bg-white px-13 py-4 my-2 mx-10 text-green-500 font-bold border border-gray-300 rounded-lg">ADD</button>
                                <p className="items-center text-gray-400 mb-4 mx-16">Customisable</p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default ItemList;