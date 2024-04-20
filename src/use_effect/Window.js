import React, {useState, useEffect} from "react";

const Window = () => {
const [width, setWidth] = useState(window.innerWidth);
const handleResize = () => {setWidth(window.innerWidth);}

useEffect(() => {
    window.addEventListener('resize', handleResize);
}, [])

return(
    <div>{width}</div>
)
};

export default Window;