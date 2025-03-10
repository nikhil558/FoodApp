// import Search from "./Search"
import Resturentcard, {withPromotedResturent} from "./Resturentcard"
import Shimmer from "./Shimmer"
import useResturentList from "../../utils/useResturentList"
// import Resturent_List from "../../utils/mockdata"
import {useState, useContext} from "react"

import { CommonInfo } from "../../utils/CommonInfo"

const Body=()=>{
    
    const [listSearch, setListSearch] = useState("");
    const {profileName, setUserName} = useContext(CommonInfo)


    const {listOfRes, filListOfRes, setResturentList, topRatedList} = useResturentList()

    const PromotedResturent = withPromotedResturent(Resturentcard)

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
    // console.log(FilListOfRes)

    return listOfRes.length === 0 ? <Shimmer/> :(
        <>
            <div className="flex shadow-lg">
                <input data-testid="SearchInput" type="search" className="m-4 p-2 border-gray-600 " value={listSearch} onChange={e => setListSearch(e.target.value)}/>
                <button className="rounded-lg bg-blue-700 m-4 px-4" onClick={()=>{
                    
                    setResturentList(listSearch)

                }}>Search</button>
                <button type="button" className="rounded-lg bg-blue-700 m-4 px-4" onClick={()=> {
                    topRatedList()
                } 
                } > Top Rated Resturents </button>
                <input type="search" className="m-4 p-2 border border-gray-600 " value={profileName} onChange={e => setUserName(e.target.value)}/>

            </div>
            
            <div className="flex flex-wrap" /*onScroll =  {PostFetchData}*/ >
                {filListOfRes.map(each => 
                    each?.info?.aggregatedDiscountInfoV3 ? <PromotedResturent resCard={each.info} key={each.info.id}/> : <Resturentcard resCard={each.info} key={each.info.id}/> 
                )}
            </div>
        </>

    )
}

export default Body