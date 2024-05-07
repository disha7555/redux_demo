import React from "react";
import {useSelector} from "react-redux"
const C = () => {
    const count=useSelector(state12=>state12);
    return(
    <div>
       
        <h1>{count}</h1>
    </div>
    )
}
export default C;