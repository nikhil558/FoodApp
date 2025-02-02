import { useState, useEffect } from "react"
import { RES_DETAIL_URL } from "./constants"

const useResturentDetails = (resId) => {
    const [resData, setResData] = useState(null)

    useEffect(()=>{
        fetchMenu()
    })

    const fetchMenu = async() => {
        const data = await fetch(RES_DETAIL_URL+resId)
        const JSON = await data.json()
        console.log(JSON.data)
        setResData(JSON.data)
    }

    return resData
}

export default useResturentDetails