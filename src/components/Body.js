// import Search from "./Search"
import Resturentcard from "./Resturentcard"
import Shimmer from "./Shimmer"
import useResturentList from "../../utils/useResturentList"
// import Resturent_List from "../../utils/mockdata"
import {useState} from "react"
import { Link } from "react-router"
const Body=()=>{
    
    const [listSearch, setListSearch] = useState("");

    const {listOfRes, FilListOfRes, setResturentList, topRatedList} = useResturentList()

    // const PostFetchData= async() => {
    //     const postData= await fetch("https://www.swiggy.com/dapi/restaurants/list/update",{
    //         method: 'POST',
    //         headers: {
    //           'Accept': 'application/json',
    //           'Content-Type': 'application/json',
    //         }
    //     }).catch(err=>{
    //         console.log(err)
    //     });
    //     const postJSON = await postData.json();
    //     console.log(postJSON)
    //     set_resturent_list(postJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    //     setFilResturentList(postJSON?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
        
    // }

    return listOfRes.length === 0 ? <Shimmer/> :(
        <>
            <div className="flex shadow-lg">
                <input type="search" className="m-4 p-2 border-gray-600 " value={listSearch} onChange={e => setListSearch(e.target.value)}/>
                <button className="rounded-lg bg-blue-700 m-4 px-4" onClick={()=>{
                    
                    setResturentList(listSearch)

                }}>Search</button>
                <button type="button" className="rounded-lg bg-blue-700 m-4 px-4" onMouseEnter={()=> {
                    topRatedList()
                } 
                } > Top Rated Resturents </button>
            </div>
            
            <div className="flex flex-wrap" /*onScroll =  {PostFetchData}*/ >
                {FilListOfRes.map(each => {
                    return (
                        <Link to={"/resturent/"+each.info.id} key={each.info.id}>
                            <Resturentcard resCard={each.info} /> 
                        </Link>
                    )
                })}
            </div>
        </>

    )
}

export default Body