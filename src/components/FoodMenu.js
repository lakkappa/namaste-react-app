import { MENU_ITEM_IMG } from "../utils/Constants";
const FoodMenu = (props) => {
    const { imageId } = props.foodMenuData;
    return (
        <div className="flex flex-wrap">
            <img src={MENU_ITEM_IMG + imageId} className="w-40 cursor-pointer" />
        </div>
    )
}
export default FoodMenu;
