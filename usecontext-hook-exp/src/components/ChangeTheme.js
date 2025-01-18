import { useContext } from "react";
import { GlobalContext } from "../context";
import { FaMoon } from "react-icons/fa6";
import { FaSun } from "react-icons/fa6";

const ChangeTheme = () => {
    const {theme, setTheme} = useContext(GlobalContext);
    console.log(theme);
    return (
        <>
            <h1 style={{margin : "0"}}>useContext hook</h1>
            <div style={{display : "flex", alignItems : "center", justifyContent : "center", position: "fixed", bottom: "80px", right : "80px"}}>
            <button type="button" onClick={() => setTheme(theme === "light" ? "dark" : "light")} style={{border : "none", background : "#0000FF", height : "30px", width : "30px", display : "flex", alignItems : "center", justifyContent : "center" ,borderRadius : "50%"}}>{theme === "dark" ? <FaSun style={{fill : "white"}}/> : <FaMoon /> }</button>
            </div>
        </>
    );
}

export default ChangeTheme;