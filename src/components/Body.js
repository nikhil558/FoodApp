import Search from "./Search"
import Resturentcard from "./Resturentcard"
import Resturent_List from "../../utils/mockdata"
import {useState} from "react"

const Body=()=>{
    const [listOfRes,set_resturent_list] = useState(Resturent_List)
        
    
    return (
        <>
            <Search/>
            <button type="button" onMouseEnter={()=> {
                const filteredList = listOfRes.filter(each => each.info.avgRating > 4.5)
                set_resturent_list(filteredList)

            } 
            } onMouseOut={()=>set_resturent_list(Resturent_List)}> Button </button>
            <div className="resturents-list">
                {listOfRes.map(each => <Resturentcard key={each.info.id} resCard={each.info} /> )}
            </div>
        </>

    )
}

export default Body