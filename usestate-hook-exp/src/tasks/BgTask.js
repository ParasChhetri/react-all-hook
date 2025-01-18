// useState Hook

import { useState } from "react";

const BgTask = () => {
    const [myName,set_MyName] = useState("Paras");
    const [bgColor, setBgCOlor] = useState("#ef3b3b");
    const [textColor, setTextColor] = useState("#000000")
    const btnChange = () => {
        set_MyName(234567);
        setBgCOlor("green")
        setTextColor("#fff");
    }
    const btnRevert = () => {
        set_MyName("Paras");
        setTextColor("#000000");
        setBgCOlor("#ef3b3b");
    }
    return (
        <>
        <div style={ {border : "8px solid green", height: "300px", backgroundColor : bgColor, color: textColor}  }   >
            <span>{myName}</span>
        </div>
        <button type="button" onClick={btnChange}>Change</button>
        <button type="button" onClick={btnRevert}>Revert</button>
        </>
    );
}

export default BgTask;