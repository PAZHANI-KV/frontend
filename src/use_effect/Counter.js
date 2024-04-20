import React, {useState, useEffect} from 'react';

const Counter = () => {
const [count, setCount] = useState(0);
const [msg, setMsg] = useState('Initial Message');

useEffect(() => {
    console.log('component mounted/updated')
    console.log(msg);
    console.log('count is increased to', count)
}, [count])

return(
    <div>
        <button onClick={() => {setCount(count + 1)}}>Increase</button>
        <p>The count value is : {count}</p>
        <button onClick={() => {setMsg('Msg updated on click event')}}>Update Message</button>
    </div>
)
};

export default Counter;