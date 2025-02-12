import { useDispatch } from "react-redux"
import { RES_CARD_IMG } from "../../utils/constants"
import { addItem } from "../../utils/CartSlice"

const ItemList = ({resCard}) => {
    const dispatch = useDispatch()

    const handelAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <div className="flex justify-between shadow m-4 px-2 py-4">
            <div className="w-9/12 text-left">
                <h1 className="font-bold">{resCard.card.info.name} </h1>
                <p>{resCard.card.info.description} </p>
            </div>
            <div className="w-3/12">
                <img src={RES_CARD_IMG+resCard.card.info.imageId} className="w-[80%]"/>
                <div className="absolute mb-10">
                    <button className="bg-black px-2.5 h-8 rounded-lg text-white" onClick={() => handelAddItem(resCard)}>ADD</button>
                </div>
            </div>
        </div>
    )
}

export default ItemList