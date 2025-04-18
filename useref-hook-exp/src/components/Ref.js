import {useEffect, useRef} from 'react';
const Ref = () => {
    const countValue = useRef(0);
    const divRef = useRef();
    const inputRef = useRef();
    const handleClick = () => {
        countValue.current ++
        // console.log(countValue.current);
    }
    useEffect(() => {
        const getDivRef = divRef.current;
        console.log(getDivRef);
    },[]);
    useEffect(() => {
        inputRef.current.focus();
    },[])
    return(
        <>
            <h1>Click Counter with useRef hook</h1>
            <button onClick={handleClick}>click</button>
            <div ref={divRef} className='helo'>Hello</div>
            <input ref={inputRef} type='text'/>
        </>
    );
}

export default Ref;
