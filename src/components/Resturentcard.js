import { useDispatch, useSelector } from "react-redux";
import {RES_CARD_IMG} from "../../utils/constants"
import { useState} from "react";
import { Link } from "react-router"
import { addFav } from "../../utils/FavResSlice.js";
import { removeFav } from "../../utils/FavResSlice.js";
const Resturentcard = (props) => {
    // const [isFav, setIsFav] = useState(false)
    const {resCard}= props;
    const {name, cloudinaryImageId, areaName, cuisines, avgRating,aggregatedDiscountInfoV3, sla}=resCard
//  const {header, subHeader} = aggregatedDiscountInfoV3
    const {slaString}=sla
    const Background=RES_CARD_IMG.concat(cloudinaryImageId)
    const dispatch = useDispatch()
    const favItems=useSelector(store => store.favorites.items)
    const isFav=favItems.filter(each => each.id===resCard.id)


    const handelFav = (item) => {
        if (isFav.length===0) {
            dispatch(addFav(item))
            // setIsFav(true)
        }else{
            dispatch(removeFav(item.id))
            // setIsFav(false)
        }
    }
    console.log("rescard")
    
    return ( 
            <div>
                <span onClick={()=> handelFav(resCard)}>{isFav.length!==0 ? "❤️":"🖤"}</span>
                <Link to={"/resturent/"+resCard.id} >
                    <div className="w-[200] m-4 p-4 rounded-lg bg-gray-100 hover:bg-gray-300">
                        <div className="h-[100] rounded-lg" style={{backgroundImage:`url(`+Background+`)`, backgroundSize: 'cover',}}>
                            <span style={{color:"rgba(255, 255, 255, 0.92)", fontWeight:900,padding:10, fontFamily:"ProximaNovaCond_Black"}}>{} {}</span>
                        </div>
                        <div className="res-details">
                            <h3 className="font-bold">{name}</h3>
                            <h3>{avgRating} • {slaString}</h3>
                            <h3>{cuisines.join(", ")}</h3>
                            <h3>{areaName}</h3>
                        </div>
                    </div>
                </Link>
            </div>
    )

}

export const withPromotedResturent = (ResturentCard) => {
    return (props) => {
        console.log("promoted")
        return (
            <>
                <label className="absolute bg-transparent text-white font-bold ml-5 pl-4 mt-25">{props.resCard.aggregatedDiscountInfoV3.header} {props.resCard.aggregatedDiscountInfoV3.subHeader}</label>
                <ResturentCard {...props}/>
            </>
        )
    }
}

export default Resturentcard