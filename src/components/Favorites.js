import { useDispatch, useSelector } from "react-redux"
import Resturentcard from "./Resturentcard"
import { clearFav } from "../../utils/FavResSlice"
const Favorites = () => {
    const favoriteItems=useSelector((store)=> store.favorites.items)
    const dispatch=useDispatch()
    return (
        <div className="text-center">
            <h1 className="font-bold text-xl">Favorites</h1>
            <button className="rounded-lg bg-blue-700 m-4 px-4" onClick={()=>dispatch(clearFav())}>Clear Favorites</button>
            <div className="shadow bg-gray-100 w-6/12 m-auto p-4 mt-4">
                {favoriteItems.map(each=> <Resturentcard resCard={each} />)}
            </div>
        </div>
    )
}

export default Favorites