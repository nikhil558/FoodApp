import { useState, useEffect } from "react"
import Shimmer from "./Shimmer.js"
import { RES_DETAIL_URL } from "../../utils/constants.js"
import { useParams } from "react-router"

const ResturentDetails = () => {
    const [resDetails, setResDetails] = useState(null)
    const {resid} = useParams()
    useEffect(() => {
        fetchMenu()
    }, [])

    const fetchMenu= async() => {
        const data = await fetch(RES_DETAIL_URL+resid)
        const JSON = await data.json()
        console.log(JSON.data)
        setResDetails(JSON.data)
    }
    
    if (resDetails===null){
        return <Shimmer/>
    }

    const{itemCards} = resDetails.cards[4].groupedCard.cardGroupMap.REGULAR.cards[2].card.card

    return (
        <div>
            <h1 classNmae="res-detail-name">{resDetails.cards[0].card.card.text}</h1>
            <div className="res-detail-tabs">
                <h1>Online Order</h1>
                <h1>Dineout</h1>
            </div>
            <div>
                <h1>Recommended</h1>
                <ul>
                    {itemCards.map(each=> <li key={each.card.info.name}>{each.card.info.name}-{each.card.info.defaultPrice/100 | each.card.info.price/100}</li>)}

                </ul>
            </div>
        </div>
    )
}

export default ResturentDetails 