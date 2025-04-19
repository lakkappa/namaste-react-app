import { useDispatch, useSelector } from "react-redux";
import { clearItem, removeItem } from "../redux/cartSlice";
import { MENU_ITEM_IMG } from "../utils/Constants";
import { Link } from "react-router-dom";

const Cart = () => {
    const itemList = useSelector((store) => store.cart.items);
    const restoName = useSelector((store) => store.cart.restoName);
    const restoImage = useSelector((store) => store.cart.restoImage);
    const areaName = useSelector((store) => store.cart.areaName);

    const clearAllItem = useDispatch();

    const clearItemHandler = () => {
        clearAllItem(clearItem());
    }

    const removeOneItem = () => {
        clearAllItem(removeItem())
    }

    let deliveryFees = 42;
    let gst = 65;
    let totalPrice = 0;

    return (
        <div className="flex justify-between bg-white-100">
            {
                !itemList.length > 0 && <div className="px-100 py-20 font-bold text-4xl items-center">Cart is empty, Please add the items.
                    <h1>Please click on the <Link to="/"> <span className=" text-blue-500">HomePage</span></Link> Option</h1></div>
            }
            {
                itemList.length > 0 &&
                <div className="bg-gray-100 mx-120 my-20 p-20 w-250">
                    <div className="flex justify-between">
                        <img className="items-center w-80 h-60 rounded-lg" src={MENU_ITEM_IMG + restoImage} />
                        <div className="mx-20">
                            <h1 className="text-3xl font-bold flex flex-wrap">{restoName}</h1>
                            <h1 className="text-2xl flex flex-wrap">📍{areaName}</h1>
                        </div>
                        <div className="mt-20">
                            <button onClick={clearItemHandler} className="bg-green-300 px-5 py-2 mt-20 font-bold border rounded-lg cursor-pointer">Clear Cart</button>
                        </div>
                    </div>
                    <div className="mt-20">
                        {
                            itemList.map((item, index) => {
                                totalPrice = totalPrice + item.card.info.price / 100 || item.card.info.defaultPrice / 100;
                                return (
                                    <div key={index} className="flex justify-between">
                                        <h1 className="flex justify-between text-2xl">{item.card.info.name} <span className="font-bold text-2xl px-10">{item.card.info.price / 100 || item.card.info.defaultPrice / 100}</span></h1>
                                        <button onClick={removeOneItem} className="bg-red-500 p-2 mb-2 text-white-500 font-bold border rounded-lg cursor-pointer">Delete</button>
                                    </div>
                                )
                            })
                        }
                    </div>
                    <div className="mt-15">
                        <h1 className="font-bold text-3xl my-3">Bill Details </h1>
                        <h1 className="text-2xl flex justify-between">Item Total : <span Ï>{totalPrice}</span></h1>
                        <h1 className="text-2xl flex justify-between">Delivery Fee within 7 kms :<span>{deliveryFees}</span></h1>
                        <p />
                        <h1 className="text-2xl flex justify-between">GST & Other Charges: <span>{gst}</span></h1>
                        <p className="border-b-4 border-black" />
                        <h1 className="font-bold text-3xl flex justify-between">To PAY <span>{totalPrice + deliveryFees + gst}</span></h1>
                    </div>
                    <div className="mt-20 text-3xl">
                        <h1>Procced for the Payment</h1>
                        <Link to="/payment"> <button className="bg-green-500 p-2 mb-2 text-white-500 font-bold border rounded-lg cursor-pointer">Payment</button></Link>
                    </div>
                </div>
            }
        </div>
    )
}
export default Cart;