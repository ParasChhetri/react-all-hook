import { useEffect, useState } from "react";


const TaskCount = () => {
    const [count, setCount] = useState(0);
    const [show, SetShow] = useState(false);
    const [productList, setProductList] = useState([]);
    const fetchData = async () => {
        try {
            const respose = await fetch('https://dummyjson.com/products');
            const result = await respose.json();
            if (result && result.products) setProductList(result.products);
        } catch (err) {
            console.log(err);
        }
    }
    const countBtn = () => {
        setCount(c => c + 1);
    }
    useEffect(() => {
        if (count === 4) {
            SetShow(true);
        }
    }, [count])
    // useEffect(() => {
    //     fetchData();
    // }, [])
    useEffect(() => {
        if (count === 8) fetchData();
    }, [count])
    return (
        <>
            <h1>useEffect hook</h1>
            <span>counting : {count}</span><br /><br />
            {
                show ? <p>Paras</p> : ""
            }
            <button onClick={countBtn}>Count</button>
            {
                productList.map((item) => {
                    return (
                        <li key={item.id}> {item.title} </li>
                    );

                })
            }
        </>
    )
}

export default TaskCount;