import {RES_CARD_IMG} from "../../utils/constants"
const Resturentcard = (props) => {
    const {resCard}= props;
    const {name, cloudinaryImageId, areaName, cuisines, avgRating,aggregatedDiscountInfoV3, sla}=resCard
//  const {header, subHeader} = aggregatedDiscountInfoV3
    const {slaString}=sla
    const Background=RES_CARD_IMG.concat(cloudinaryImageId)
    
    return ( 
            
                <div className="resturent-card">
                    <div className="res-img" style={{backgroundImage:`url(`+Background+`)`, backgroundSize: 'cover',}}>
                       <span style={{color:"rgba(255, 255, 255, 0.92)", fontWeight:900,padding:10, fontFamily:"ProximaNovaCond_Black"}}>{} {}</span>
                    </div>
                    <div className="res-details">
                        <h3>{name}</h3>
                        <h3>{avgRating} • {slaString}</h3>
                        <h3>{cuisines.join(", ")}</h3>
                        <h3>{areaName}</h3>
                    </div>
                </div>
            
    )

}

export default Resturentcard