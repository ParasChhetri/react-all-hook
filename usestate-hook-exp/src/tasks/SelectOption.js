import { useState } from "react";


const SelectOption = () => {
    const [formData, setFormData] = useState({ name: "", city: "" });
    const [paragraphToggle, setParagraphToggle] = useState(false);
    const showParagraph = () => {
        setParagraphToggle(!paragraphToggle);
    }
    const handelNameChange = (e) => {
        setFormData({ ...formData, name: e.target.value })
    } 
    const handelCityChange = (e) => {
        setFormData({ ...formData, city: e.target.value })
    }
    console.log(formData);
    return (
        <>
            <h1>Option group with useState Hook</h1>
            <div>
                <input type="text" placeholder="Name" onChange={handelNameChange} />
                <select name="city" onChange={handelCityChange}>
                    <option value={""} id="">
                        Select city
                    </option>
                    <option value={"Palampur"}>
                        Palampur
                    </option>
                    <option value={"Mohali"}>
                        Mohali
                    </option>
                    <option value={"Kangra"}>
                        Kangra
                    </option>
                    <option value={"Bangluru"}>
                        Bangluru
                    </option>
                </select>
                <div style={{height: "80px"}}>
                    {
                        paragraphToggle ? <p>
                            {formData.name} lives in {formData.city}
                        </p> : ""
                    }
                </div>
                <button type="button" onClick={showParagraph}>Show</button>
            </div>
        </>
    );
}

export default SelectOption;