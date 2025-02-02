import { useEffect, useState } from "react"
const User = () => {
    const [count,setCount] = useState(0)

    useEffect(()=>{
        const timer = setInterval(()=>{
            setCount(count+1)
        },1000)

        return ()=>{
            clearInterval(timer)
        }  
        
    },[count])

    return (
        <div>
            <p>{count}</p>
        </div>
    )

}

export default User