import React, { useeffect} from 'react'
const LearnHooks = () => {
    const [count,setCount]= useState(0);
    useEffect(()=> {
        console.log(count);
    }, [count]);

return (
    <div>hello</div>

);
};
export default LearnHooks