import { useState } from "react"
import Shimmer from "./Shimmer.js"
import ResturentCategory from "./ResturentCategory.js"

import { useParams } from "react-router"
import useResturentDetails from "../../utils/useResturentDetails.js"


const ResturentDetails = () => {
    const [categoryItem, setCategoryItem] = useState(null)

    
    const {resid} = useParams()
    const resDetails = useResturentDetails(resid)

    const HandlingCategory=(index)=>{
        categoryItem!==index ? setCategoryItem(index) : setCategoryItem(null) 
    }
    
    if (resDetails===null){
        return <Shimmer/>
    }
    
    const itemCards = resDetails?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards
    
    const itemCategory = itemCards.filter(each => each?.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <div className="text-center m-4">
            <div>
                <h1 className="font-bold">{resDetails.cards[0].card.card.text}</h1>
            </div>
            <div>
                {itemCategory.map((each,index)=> <ResturentCategory resCategory={each} key={each.card.card.categoryId} showItem={index===categoryItem ? true : false} handel={()=>HandlingCategory(index)}/>)} 
            </div>
        </div>
    )
}

export default ResturentDetails 