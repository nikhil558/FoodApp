// import Search from "./Search"
import Resturentcard from "./Resturentcard"
import Shimmer from "./Shimmer"
// import Resturent_List from "../../utils/mockdata"
import {useState, useEffect} from "react"

const Body=()=>{
    const [listOfRes,set_resturent_list] = useState([])
    const [FilListOfRes,setFilResturentList] = useState([])
    const [listSearch, setListSearch] = useState("");

    useEffect(()=>{
         fetchData()
    },[])

    const fetchData=async()=>{
        const Data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627");

        const JSON = await Data.json();
        console.log(JSON)
        set_resturent_list(JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        setFilResturentList(JSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

    return listOfRes.length === 0 ? <Shimmer/> :(
        <>
            <div className="search-container">
                <input type="search" className="search-bar" value={listSearch} onChange={e => setListSearch(e.target.value)}/>
                <button style={{color:"blue"}} onClick={()=>{
                    let FltList = listOfRes.filter(each => each.info.name.toLowerCase().includes(listSearch.toLowerCase()))
                    setFilResturentList(FltList)

                }}>Search</button>
                <button type="button" onMouseEnter={()=> {
                const filteredList = listOfRes.filter(each => each.info.avgRating >= 4.4)
                setFilResturentList(filteredList)
            } 
            } > Top Rated Resturents </button>
            </div>
            
            <div className="resturents-list">
                {FilListOfRes.map(each => <Resturentcard key={each.info.id} resCard={each.info} /> )}
            </div>
        </>

    )
}

export default Body