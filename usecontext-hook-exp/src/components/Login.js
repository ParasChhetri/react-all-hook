import { useContext } from "react";
import { GlobalContext } from "../context";


const Login = () => {
    const { theme } = useContext(GlobalContext);
    return (
        <>
            <h1 style={theme === "dark" ? { background: "linear-gradient(45deg, #000080, #000000, #0000FF)", color: "white" } : { background: "red" }}>Login</h1>
            <button type="button" style={{ padding: "6px 12px", border: "none", borderRadius: "14px", background: "magenta" }}>Login</button>
        </>
    );
}

export default Login;