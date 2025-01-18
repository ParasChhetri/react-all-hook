import { useState } from "react";

const ToggleText = () => {
    const [toggleText, setToggleText] = useState(false);
    const handelToggle = () => {
        setToggleText(!toggleText);
    }
    return (
        <>
            <div style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
                <h1>Toggle text using useState Hook</h1>
                <div style={{ height: "80px" }}>
                    {
                        toggleText ? <p>I am toggler</p> : ""
                    }
                </div>
                <button onClick={handelToggle}>Toggle</button>

            </div>
        </>
    );
}

export default ToggleText;