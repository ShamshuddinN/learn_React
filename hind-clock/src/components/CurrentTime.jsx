import { useEffect } from "react";
import { useState } from "react";

const CurrentTime = () => {
    const [time, setTime] = useState(new Date())
    

    useEffect(() => {
        

        const myIntervelID = setInterval(() => {setTime(new Date())}, 1000)

        return () => {
            clearInterval(myIntervelID);
        };


    } 
    ,[])


    
    return <center> <p className="fw-bold fs-4" > Current Time Now {time.toLocaleTimeString()}</p> </center>
}

export default CurrentTime;