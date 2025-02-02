import { useState } from "react"

const useOnlineStatus = () => {
    const [status,setStatus] = useState(true)

    const offlineStatus = addEventListener("offline", (event) => {
        setStatus(false)
    });
    const onlineStatus = addEventListener("online", (event) => {
        setStatus(true)
    });

    return status

}

export default useOnlineStatus