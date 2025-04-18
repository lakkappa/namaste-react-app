import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../redux/cartSlice";
import ItemList from "./ItemList";

const Cart = () => {
    const itemList = useSelector((store) => store.cart.items);

    const clearAllItem = useDispatch();

    const clearItemHandler = () => {
        clearAllItem(clearItem());
    }

    const removeOneItem = () => {
        clearAllItem(removeItem())
    }

    return (
        <div className="items-center px-200 py-30">
            {
                !itemList.length > 0 ? <h1 className="font-bold text-4xl">Cart is empty, Please add the items.</h1> :
                    <div className="pb-20">
                        <button onClick={removeOneItem} className="bg-blue-500 px-13 py-4 my-2 mx-10 text-white-500 font-bold border rounded-lg cursor-pointer">Remove 1 Item</button>
                        <button onClick={clearItemHandler} className="bg-red-500 px-13 py-4 my-2 mx-10 text-white-500 font-bold border rounded-lg cursor-pointer">Clear All Items</button>
                    </div>
            }


            {
                itemList.length > 0 &&
                <ItemList data={itemList} />
            }

        </div>
    )
}
export default Cart;