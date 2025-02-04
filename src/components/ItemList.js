import { RES_CARD_IMG } from "../../utils/constants"

const ItemList = ({resCard}) => {
    return (
        <div className="flex justify-between shadow m-4 px-2 py-4">
            <div className="w-9/12 text-left">
                <h1 className="font-bold">{resCard.card.info.name} </h1>
                <p>{resCard.card.info.description} </p>
            </div>
            <div className="w-3/12">
                <img src={RES_CARD_IMG+resCard.card.info.imageId} className="w-[80%]"/>
            </div>
        </div>
    )
}

export default ItemList